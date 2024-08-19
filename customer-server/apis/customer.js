module.exports = (app, db) => {
  let common = require("../global/common");
  const USER_MODEL = require("../service/customer-service");
  const PLAN_MODEL = require("../service/customer-plans");
  const arrayEmpty = [];

  app.post("/v2/api/user/user_signup", (req, res) => {
    try {
      let obj = req.body;
      console.log("inside api");

      if (!obj) {
        res.status(200).json({
          success: false,
          message: "Requst is missing.",
          data: arrayEmpty,
        });
      } else {
        USER_MODEL.funUserSignup(obj, db)
          .then((result) => {
            if (result.message && result.message.includes("E11000")) {
              res.status(200).json({
                success: false,
                message: "Email already exists",
                data: arrayEmpty,
              });
            } else {
              res.status(200).json(result);
            }
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
  app.post("/v2/api/user/user_signin", (req, res) => {
    try {
      let obj = req.body;

      if (!obj) {
        res.status(200).json({
          success: false,
          message: "Requst is missing.",
          data: arrayEmpty,
        });
      } else {
        USER_MODEL.funUserLogin(obj, db)
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
  app.post("/v2/api/user/delete_account", (req, res) => {
    try {
      let obj = req.body;

      if (!obj) {
        res.status(200).json({
          success: false,
          message: "Requst is missing.",
          data: arrayEmpty,
        });
      } else {
        USER_MODEL.funDeleteAccount(obj, db)
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
  app.post("/v2/api/otp/send_otp_for_reset", (req, res) => {
    try {
      let obj = req.body;

      if (!obj) {
        res.status(200).json({
          success: false,
          message: "Requst is missing.",
          data: arrayEmpty,
        });
      } else {
        USER_MODEL.funSendOtpForPasswdRest(obj, db)
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
  app.post("/v2/api/otp/verify_otp_and_passwd_reset", (req, res) => {
    try {
      let obj = req.body;

      if (!obj) {
        res.status(200).json({
          success: false,
          message: "Requst is missing.",
          data: arrayEmpty,
        });
      } else {
        USER_MODEL.funSendOtpCheck(obj, db)
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
  app.post("/v2/api/plans/get_plans", (req, res) => {
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
  app.get("/v2/api/token/token_decrypt", common.verifyToken, (req, res) => {
    try {
      let obj = req.body;

      if (!obj) {
        res.status(200).json({
          success: false,
          message: "Requst is missing.",
          data: arrayEmpty,
        });
      } else {
        let result = {
          success: true,
          message: "Token decrypted",
          data: req.user,
        };
        // obj.strEmail = "";
        // obj.fkUserId = "";
        // USER_MODEL.funGetTokenDecrypt(obj, db)
        //   .then((result) => {
        res.status(200).json(result);
        // })
        // .catch((error) => {
        //   res.status(400).json({
        //     success: false,
        //     message: "Internal server error.",
        //     data: arrayEmpty,
        //   });
        // });
      }
    } catch (error) {}
  });
};
