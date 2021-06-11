import * as UserController from '../controller/AccountControllers/authServer.js'

export default function (app) {
    //Account Routes
    app.route("/users")
        .get(UserController.getUsers)

    app.route("/user/register")
        .post(UserController.createUser)
    
    app.route('/user/login')
        .post(UserController.login)

    app.route('/user/checkValidLogin')
        .post(UserController.checkValidLogin)

    app.route('/user/logout')
        .post(UserController.logout)

    app.route('/user/refreshToken')
        .post(UserController.refreshToken)

    app.route("/user/:id")
        .put(UserController.updateUser)

    app.route('/user/delete/:id')
        .put(UserController.deleteUser)
        .delete(UserController.deleteUserAdmin)

    app.route("/user/checkEmail")
        .post(UserController.checkEmail)
        
};