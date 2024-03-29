import express from "express";
import User from "../../model/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {uploadPhoto} from "../UploadImages/UploadImg.js"
import { registerValidation, loginValidation } from "../../../validation.js";

let refreshTokens = [];

export const createUser = async (req, res) => {
	let _avatar = {}
	try {
	//VALIDATE THE DATA BEFORE A USER
	const { error } = registerValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	//Checking if the user is already in DB
	const emailExist = await User.findOne({ email: req.body.email });
	if (emailExist) return res.status(400).send("Email already exists");

	//Hash the passwords
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(req.body.password, salt);

	//Create new User
	if(req.body.avatar){
		_avatar = await uploadPhoto(req.body.avatar)
	}
	const user = new User({
		name: req.body.name,
		tagname: req.body.tagname,
		email: req.body.email,
		password: hashedPassword,
		age: req.body.age
	});
	if(_avatar._id){
		user = new User({
			name: req.body.name,
			tagname: req.body.tagname,
			email: req.body.email,
			password: hashedPassword,
			age: req.body.age,
			avatar: _avatar._id
		});
	}
		const savedUser = await user.save();
		res.send({ user: user._id });
	} catch (error) {
		res.status(400).send(error);
	}
};

//LOGIN
export const login = async (req, res) => {
	//VALIDATE THE DATA BEFORE A USER
	const { error } = loginValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	//Checking if email exist
	const user = await User.findOne({ email: req.body.email });
	const userData = await User.findById(
		user._id,
		{ __v: 0 },
		{ populate: "avatar" }
	);
	if (!user) return res.status(400).send("Email is not found");

	//Password is correct
	const validPass = await bcrypt.compare(req.body.password, user.password);
	if (!validPass) return res.status(400).send("Invalid password");

	//Create and assgin a token
	const accessToken = jwt.sign(
		{ 
      _id: user._id,
      email: user.email,
      password: user.password
    },
		process.env.ACCESS_TOKEN_SECRET,
		{
			expiresIn: "30s",
		}
	);
	// const refreshToken = jwt.sign(
	// 	{ 
    //   _id: user._id,
    //   email: user.email,
    //   password: user.password
    // },
	// 	process.env.REFRESH_TOKEN_SECRET
	// );
	// refreshTokens.push(refreshToken);
	res.json({
		accessToken,
		// refreshToken,
		id: user._id,
		name: user.name,
		tagname: user.tagname,
		email: user.email,
		age: user.age,
		role: user.role,
		avatar: userData.avatar ? userData.avatar.imgURL : "",
	});
};

//LOGOUT
export const logout = (req, res) => {
	//Remove assgin token
	const refreshToken = req.body.token;
	refreshTokens = refreshTokens.filter((refToken) => refToken !== refreshToken);
	res.sendStatus(200).send("Logout success!!");
};

//CHECK VALID LOGIN
export const checkValidLogin = async (req, res) => {
	//VALIDATE THE DATA BEFORE A USER
	const { error } = loginValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	//Checking if email exist
	const user = await User.findOne({ email: req.body.email });
	if (!user) return res.status(400).send("Email is not found");

	//Password is correct
	const validPass = await bcrypt.compare(req.body.password, user.password);
	if (!validPass) return res.status(400).send("Invalid password");

	//Create and assgin a token
	const accessToken = jwt.sign(
		{ _id: user._id },
		process.env.ACCESS_TOKEN_SECRET,
		{
			expiresIn: "60s",
		}
	);
	const refreshToken = jwt.sign(
		{ _id: user._id },
		process.env.REFRESH_TOKEN_SECRET
	);
	refreshTokens.push(refreshToken);
	res.json({ accessToken, refreshToken });
};

//REFRESH TOKEN
export const refreshToken = (req, res) => {
	const refreshToken = req.body.token;
	if (!refreshToken) res.sendStatus(401);
	if (!refreshTokens.includes(refreshToken)) res.sendStatus(403);

	jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, data) => {
		if (err) res.sendStatus(403);
		const accessToken = jwt.sign(
			{ email: data.email },
			process.env.ACCESS_TOKEN_SECRET,
			{
				expiresIn: "30s",
			}
		);
		res.json({ accessToken });
	});
};

//GET ALL USER
export const getUsers = (req, res) => {
	User.find({ active: true }, { __v: 0 }).exec((err, data) => {
		if (err) res.send(err);
		res.json({
			data: data.map((element) => {
				return {
					id: element._id,
					name: element.name,
					tagname: element.tagname,
					email: element.email,
					password: element.password,
					age: element.age,
					avatar: element.avatar,
				};
			}),
		});
	});
};

//GET ONE USER
export const getOneUser = async (req, res) => {
	const id = req.params.id;
	const info = await User.findById(id, function (err, docs) {
		if (err) {
			res.send(err);
		} else {
			res.json(docs);
		}
	});
};

//UPDATE INFO USER
export const updateUser = async (req, res) => {
	if(req.body.avatar){
		_avatar = await uploadPhoto(req.body.avatar)
	}
	const user = {
		name: req.body.name,
		tagname: req.body.tagname,
		email: req.body.email,
		password: hashedPassword,
		age: req.body.age
	};
	if(_avatar._id){
		user = {
			name: req.body.name,
			tagname: req.body.tagname,
			email: req.body.email,
			password: hashedPassword,
			age: req.body.age,
			avatar: _avatar._id
		};
	}
	const info = await User.findOneAndUpdate(req.params.id, user);
	res.json({ message: "Update Success", info });
};

//DELETE USER(ROLE: MEMBER)
export const deleteUser = async (req, res) => {
	const info = await User.findOneAndUpdate(req.params.id, { active: false });
	res.json({ message: "Delete User Success", info });
};

//DELETE USER(ROLE: ADMIN)
export const deleteUserAdmin = async (req, res) => {
	const info = await User.findOneAndDelete(req.params.id);
	res.json({ message: "ADMIN Delete User Success" });
};

//CHECK EMAIL EXIST
export const checkEmail = async (req, res) => {
	const user = await User.findOne({ email: req.body.email });
	if (user) return res.status(400).send("Email already exists!! Try again");
	res.json({ message: "Check email OK!" });
};

//CHECK TAG NAME EXIST
export const checkTagName = async (req, res) => {
	const user = await User.findOne({ tagname: req.body.tagname });
	if (user) return res.status(400).send("TagName already exists!! Try again");
	res.json({ message: "Check tagname OK!" });
};
