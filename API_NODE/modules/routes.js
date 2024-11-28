let ExtraRoute = require("./extras/extras.route");
let UserRoute = require("./users/users.route");

module.exports = (app, router) => {
    ExtraRoute(app, router);
    UserRoute(app, router);
};