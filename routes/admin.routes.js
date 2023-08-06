const controller = require("../controllers/admin.controller");
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post("/api/add/room", controller.addroom);
  app.post("/api/add/location", controller.addlocation);
  app.post("/api/add/faq", controller.addfaq)
};
