let ExtraCtrl = require("./extras.ctrl");
let middlewareToken = require("./../../middlewares/auth.middleware").tokenValid;

module.exports = (app, router) => {
    router.post("/api/v1/extras/pdf/test",[middlewareToken], ExtraCtrl.GenerateTestPdf);
}