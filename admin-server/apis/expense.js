module.exports = (app, db) => {
  let common = require("../global/common");
  const EXPENSE_MODEL = require("../service/expense-service");
  const arrayEmpty = [];

  app.post(
    "/v2/api/expense/get_expense_types",
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
          EXPENSE_MODEL.funGetExpenseTypes(obj, db)
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
  app.post("/v2/api/expense/expense_create", common.verifyToken, (req, res) => {
    try {
      let obj = req.body;

      if (!obj) {
        res.status(200).json({
          success: false,
          message: "Requst is missing.",
          data: arrayEmpty,
        });
      } else {
        EXPENSE_MODEL.funAddexpense(obj, db)
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
  app.post("/v2/api/expense/expense_update", common.verifyToken, (req, res) => {
    try {
      let obj = req.body;

      if (!obj) {
        res.status(200).json({
          success: false,
          message: "Requst is missing.",
          data: arrayEmpty,
        });
      } else {
        EXPENSE_MODEL.funUpdateExpense(obj, db)
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
  app.post("/v2/api/expense/expense_delete", common.verifyToken, (req, res) => {
    try {
      let obj = req.body;

      if (!obj) {
        res.status(200).json({
          success: false,
          message: "Requst is missing.",
          data: arrayEmpty,
        });
      } else {
        EXPENSE_MODEL.funDeleteExpense(obj, db)
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
  app.post(
    "/v2/api/expense/get_all_expense",
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
          EXPENSE_MODEL.funGetAllExpense(obj, db)
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
