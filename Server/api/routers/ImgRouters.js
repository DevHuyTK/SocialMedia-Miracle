import * as UploadPhoto from '../controller/Upload/UploadImg.js'

export default function (app) {
    
    app.route("/user/photos")
    .get(UploadPhoto.uploadPhoto)

    app.route("/user/photo")
    .post(UploadPhoto.uploadPhoto)
    
}
