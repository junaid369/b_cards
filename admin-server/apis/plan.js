module.exports = (app, db) => {
  let common = require("../global/common");
  const PLAN_MODEL = require("../service/plans-service");
  const arrayEmpty = [];


  app.post("/v2/api/plans/create_plans", 
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

        PLAN_MODEL.funCreatePLan(obj, db)
          .then((result) => {
            res.status(200).json(result);
          })
          .catch((error) => {
            console.log(error,"0000")
            res.status(400).json({
              success: false,
              message: "Internal server error.",
              data: arrayEmpty,
            });
          });
      }
    } catch (error) {}
  });
  app.post("/v2/api/plans/update_plans", common.verifyToken, (req, res) => {
    try {
      let obj = req.body;

      if (!obj) {
        res.status(200).json({
          success: false,
          message: "Requst is missing.",
          data: arrayEmpty,
        });
      } else {
        PLAN_MODEL.funUpdatePlan(obj, db)
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
  });
  app.post("/v2/api/plans/delete_plans", common.verifyToken, (req, res) => {
    try {
      let obj = req.body;

      if (!obj) {
        res.status(200).json({
          success: false,
          message: "Requst is missing.",
          data: arrayEmpty,
        });
      } else {
        PLAN_MODEL.funDeletePlan(obj, db)
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
  });
  app.post("/v2/api/plans/get_plans", common.verifyToken, (req, res) => {
    try {
      let obj = req.body;

      if (!obj) {
        res.status(200).json({
          success: false,
          message: "Requst is missing.",
          data: arrayEmpty,
        });
      } else {
        PLAN_MODEL.funGetPlans(obj, db)
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
  });
};
