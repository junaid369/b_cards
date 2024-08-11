module.exports = (app, db) => {
  let common = require("../global/common");
  const SUPPLIER_MODEL = require("../service/supplier-service");
  const arrayEmpty = [];

  // all customer view
  app.post(
    "/v2/api/supplier/get_all_supplier",
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
          SUPPLIER_MODEL.funGetAllSupplier(obj, db)
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
  app.post("/v2/api/supplier/add_supplier", common.verifyToken, (req, res) => {
    try {
      let obj = req.body;

      if (!obj) {
        res.status(200).json({
          success: false,
          message: "Requst is missing.",
          data: arrayEmpty,
        });
      } else {
        obj.code = "SUPL";
        SUPPLIER_MODEL.getCode(obj,db)
          .then((data) => {
            console.log(data)
            SUPPLIER_MODEL.funAddSupplier(obj, db, data.data)
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
    "/v2/api/supplier/update_supplier",
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
          SUPPLIER_MODEL.funUpdateSupplier(obj, db)
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
  app.post(
    "/v2/api/supplier/delete_supplier",
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
          SUPPLIER_MODEL.funDeleteSupplier(obj, db)
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
