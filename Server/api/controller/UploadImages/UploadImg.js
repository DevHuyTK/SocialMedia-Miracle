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

//CREATE NEW SINGLE PHOTO
export const uploadPhoto = (req, res) => {
	var img = fs.readFileSync(req.file.path);
	var encode_image = img.toString("base64");
	// Define a JSONobject for the image attributes for saving to database

	var finalImg = {
		contentType: req.file.mimetype,
		image: new Buffer(encode_image, "base64"),
	};
	ImgStore.insertOne(finalImg, (err, result) => {
		console.log(result);

		if (err) return console.log(err);

		console.log("saved to database");
		res.redirect("/");
	});
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

//GET ONE PHOTO
export const getOnePhoto = (req, res) => {
    var filename = req.params.id;
     
    ImgStore.findOne({'_id': ObjectId(filename) }, (err, result) => {
      if (err) return console.log(err)
      
      res.contentType('image/jpeg');
      res.send(result.image.buffer)
    })
  }