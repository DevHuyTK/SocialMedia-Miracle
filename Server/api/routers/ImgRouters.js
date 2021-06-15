import * as UploadPhoto from '../controller/UploadImages/UploadImg.js'

export default function (app) {
    
    app.route("/img/photos")
    .get(UploadPhoto.getPhotos)

    app.route("/img/photo")
    .post(UploadPhoto.uploadPhoto)
    
    app.route("/img/photo/:id")
    .post(UploadPhoto.getOnePhoto)
    
}
