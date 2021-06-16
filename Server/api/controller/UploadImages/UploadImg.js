import express from "express";
import ImgStore from '../../model/ImgStore.js'


//UPLOAD IMAGES INTO SERVER
export const uploadImages = (req, res) => {
    console.log(req.files.upload);
    const images = req.files.upload;
    var resImages = []
    if (images.length > 1) {
        for (let i = 0; i < images.length; i++) {
            let path = './public/images' + "\\" + images[i].name.replace(/\s/g, '');

            images[i].mv(path, (err) => {
                if (err) {
                    return res.json(err);
                }
            })
            resImages.push(images[i].name.replace(/\s/g, ''));
            if (i + 1 === images.length) {
                console.log(resImages);
                res.json({ listImg: resImages })
            }
        }
    } else {
        let path = './public/images' + "\\" + images.name.replace(/\s/g, '');

        images.mv(path, (err) => {
            if (err) {
                return res.json(err);
            } else {
                res.json({ listImg: images.name.replace(/\s/g, '') })
            }
        })
    }
}

//CREATE NEW PHOTO
export const uploadPhoto = async (imgReq) => {

	var finalImg = new ImgStore({
		imgURL: imgReq,
	});
	let result = await finalImg.save();
    return result
};

//GET ALL PHOTOS
export const getPhotos = (req, res) => {
	ImgStore.find().toArray((err, result) => {
		const imgArray = result.map((element) => element._id);
		console.log(imgArray);

		if (err) return console.log(err);
		res.send(imgArray);
	});
};
