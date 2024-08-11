module.exports = (app, db) => {
  let common = require("../global/common");
  const CUSTOMER_MODEL = require("../service/customer-service");
  const arrayEmpty = [];

  // all customer view
  app.post(
    "/v2/api/customer/get_all_customer",
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
          CUSTOMER_MODEL.funGetAllCustomer(obj, db)
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
  app.post("/v2/api/customer/add_customer", common.verifyToken, (req, res) => {
    try {
      let obj = req.body;

      if (!obj) {
        res.status(200).json({
          success: false,
          message: "Requst is missing.",
          data: arrayEmpty,
        });
      } else {
        obj.code = "CUST";
        CUSTOMER_MODEL.getCode(obj, db)
          .then((number) => {
            obj.code = "SUPL";

            CUSTOMER_MODEL.getCode(obj, db).then((code) => {
              //here fetch supllier code

              CUSTOMER_MODEL.funAddCustomer(obj, db, number.data, code.data)
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
            });
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
    "/v2/api/customer/update_customer",
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
          CUSTOMER_MODEL.funUpdateCustomer(obj, db)
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
  //profit relase confirm in user

  app.post(
    "/v2/api/customer/profit_release",
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
          CUSTOMER_MODEL.funProfitRelease(obj, db)
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
  //end
  app.post(
    "/v2/api/customer/delete_customer",
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
          CUSTOMER_MODEL.funDeleteCustomer(obj, db)
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
