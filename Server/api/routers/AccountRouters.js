import * as UserController from '../controller/AccountControllers/authServer.js'

export default function (app) {
    //Account Routes
    app.route("/users")
        .get(UserController.getUsers)

    app.route("/user/register")
        .post(UserController.createUser)
    
    app.route('/user/login')
        .post(UserController.login)

    app.route('/user/logout')
        .post(UserController.logout)

    app.route('/user/refreshToken')
        .post(UserController.refreshToken)

    app.route("/user/:id")
        .put(UserController.updateUser)
        .put(UserController.deleteUser)
        .delete(UserController.deleteUserAdmin)

};