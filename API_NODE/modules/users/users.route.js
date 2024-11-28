let UserCtrl = require("./users.ctrl");
let middlewareToken = require("./../../middlewares/auth.middleware").tokenValid;

module.exports = (app, router) => {
    router.post("/api/v1/users/save",[middlewareToken], UserCtrl.SaveUser);
    router.get("/api/v1/users/validate-username",[middlewareToken], UserCtrl.ValidateUsername);
    router.post("/api/v1/users/count",[middlewareToken], UserCtrl.GetUsersCount);
    router.post("/api/v1/users/list",[middlewareToken], UserCtrl.GetUsersList);
    router.post("/api/v1/users/remove",[middlewareToken], UserCtrl.RemoveUser);
    router.get("/api/v1/users/byId/:id",[middlewareToken], UserCtrl.GetUserById);
    router.post("/api/v1/users/update",[middlewareToken], UserCtrl.UpdateUser);
}