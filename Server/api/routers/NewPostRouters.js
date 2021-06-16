
import * as AccountController from '../controller/NewPostControllers/post.js'

//Chua lam phan nay moi xay demo ti code thoi
export default function (app) {
    //Account Routes
    app.route("/newsfeed")
        .get(AccountController.getItem)

    app.route("/post")
        .post(AccountController.createItem)

    app.route("/post/:id")
        .put(AccountController.updateItem)
        .delete(AccountController.deleteItem)

};