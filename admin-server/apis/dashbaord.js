module.exports = (app, db) => {
  let common = require("../global/common");
  const DASH_MODEL = require("../service/dashboard-service");
  const arrayEmpty = [];

  app.post(
    "/v2/api/dashbaord/get_dashboard",
    common.verifyToken,
    (req, res) => {
      try {
        let obj = req.body;

        if (!obj) {
          res.status(200).json({
            success: false,
            message: "Requst is missing.",
            data: arrayEmpty,
          });
        } else {
          DASH_MODEL.funGetDashbord(obj, db)
            .then((result) => {
              res.status(200).json(result);
            })
            .catch((error) => {
              res.status(400).json({
                success: false,
                message: "Internal server error.",
                data: arrayEmpty,
              });
            });
        }
      } catch (error) {}
    }
  );
};
