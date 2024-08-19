// funAddAdminModules

const common = require("../global/common");
const mongoose = require("mongoose");
const { customer } = require("../models/customer-model");
let jwt = require("jsonwebtoken");
const config = require("../config/config");
const moment = require("moment-timezone");
const nodemailer = require("nodemailer");

const arrayEmpty = [];

module.exports = {
  funUserSignup: async function (obj, db) {
    try {
      let userDetail = {
        fkUserId: new mongoose.Types.ObjectId(),
        strName: obj?.strName,
        strEmail: obj?.strEmail,
        strPhone: obj.strPhone,
        strPassword: obj?.strPassword,
        freeTrial: false,
        strActive: true,
        strStatus: "N",
        createdAt: config.uaeTime(new Date()),
      };
      let checkEmail = await customer.find({ strEmail: strEmail });
      if (checkEmail) {
        return {
          success: false,
          message: "The email is already registered.",
          data: arrayEmpty,
        };
      }

      let hashpassword = common.setPassword(obj.strPassword);
      if (!hashpassword) {
        return {
          success: false,
          message: "Password encryption failed.",
          data: arrayEmpty,
        };
      }
      userDetail.strPassword = hashpassword;
      let insertuser = await customer.create(userDetail);

      if (insertuser) {
        return {
          success: true,
          message: "Success.",
          data: arrayEmpty,
        };
      } else {
        return {
          success: false,
          message: "Failed to update.",
          data: arrayEmpty,
        };
      }
    } catch (error) {
      return {
        success: false,
        message: "System:" + error,
        data: arrayEmpty,
      };
    }
  },

  funUserLogin: async function (obj, db) {
    try {
      let strEmail = obj.strEmail;
      let strPassword = obj.strPassword;

      let userDetails = await customer.aggregate([
        {
          $match: {
            strEmail: strEmail,
            strStatus: "N",
          },
        },
        {
          $project: {
            fkUserId: 1,
            strEmail: 1,
            strName: 1,
            strPassword: 1,
            freeTrial: 1,
            strCountry: 1,
            strActive: true,
            strStatus: "N",
            _id: 0,
          },
        },
      ]);
      if (!userDetails.length > 0)
        return {
          success: false,
          message: "does not matching any documents",
          data: arrayEmpty,
        };
      let objLoginPassword = common.validPassword(strPassword);

      if (userDetails[0].strPassword != objLoginPassword)
        return {
          success: false,
          message: "Does not match the password.",
          data: [],
        };
      let objPasData = {
        strEmail: obj.strEmail,
        intUserId: userDetails[0].fkUserId,
      };

      const token = jwt.sign({ user: objPasData }, config.JWT_SECRET, {
        expiresIn: "60m",
      }); // 10 minutes expiration

      if (token) {
        userDetails[0].token = token;

        return {
          success: true,
          message: "Login success",
          data: userDetails[0],
        };
      } else {
        return {
          success: false,
          message: "Token implment failed",
          data: arrayEmpty,
        };
      }
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "System:" + error,
        data: arrayEmpty,
      };
    }
  },
  funDeleteAccount: async function (obj, db) {
    try {
      let fkUserId = obj.fkUserId || "";

      if (!fkUserId) {
        return {
          success: false,
          message: "Userid Missing.",
          data: arrayEmpty,
        };
      }

      let deleteUser = await customer.updateOne(
        { fkUserId: new mongoose.Types.ObjectId(fkUserId) },
        {
          $set: {
            strStatus: "D",
            strUpdatedUserId: new mongoose.Types.ObjectId(fkUserId),
            dateUpdated: new Date(),
          },
        }
      );
      if (deleteUser.modifiedCount == 1) {
        return {
          success: true,
          message: "Account deletion completed",
          data: arrayEmpty,
        };
      } else {
        return {
          success: false,
          message: "Account deletion is not possible now",
          data: arrayEmpty,
        };
      }
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "System:" + error,
        data: arrayEmpty,
      };
    }
  },
  funSendOtpForPasswdRest: async function (obj, db) {
    try {
      let strEmail = obj.strEmail;
      let tenMinutes = 10 * 60 * 1000;

      let getAdminDetails = await customer.findOne({
        strEmail: strEmail,
        strStatus: "N",
      });

      let curentTime = config.uaeTime(new Date());

      if (getAdminDetails) {
        let updateMatch = {
          strEmail: strEmail + "",
          strStatus: "N",
          blnVerifiedStatus: false,
          dateCreated: {
            // 10 minutes ago (from now)
            $gt: new Date(curentTime.getTime() - tenMinutes),
          },
        };

        let checkOtpCln = await db
          .collection("cln_otp")
          .find(updateMatch)
          .toArray();
        if (checkOtpCln && checkOtpCln.length > 0) {
          let otp = checkOtpCln[0].strOTP;
          let response = await sendEmail(otp, strEmail);
          if (response) {
            return {
              success: true,
              message: "Pls check your mail",
              data: arrayEmpty,
            };
          } else {
            return {
              success: true,
              message: "Pls try again later",
              data: arrayEmpty,
            };
          }
        } else {
          let otp = Math.floor(Math.random() * 90000) + 10000;
          let reponse = await sendEmail(otp, strEmail);
          if (reponse) {
            let insertUserOtp = {
              strEmail: strEmail + "",
              strOTP: otp + "",
              strStatus: "N",
              blnVerifiedStatus: false,
              strCreatedUserId: null,
              dateCreated: config.uaeTime(new Date()),
              dateUpdated: null,
            };
            let insertOtp = await db
              .collection("cln_otp")
              .insertOne(insertUserOtp);
            if (insertOtp && insertOtp.acknowledged == true) {
              return {
                success: true,
                message: "Pls check your mail",
                data: arrayEmpty,
              };
            } else {
              return {
                success: false,
                message: "Otp not inserted .",
                data: arrayEmpty,
              };
            }
          } else {
            return {
              success: false,
              message: "Pls try again later .",
              data: arrayEmpty,
            };
          }
        }
      } else {
        return {
          success: false,
          message: "User not matching",
          data: arrayEmpty,
        };
      }
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "System:" + error,
        data: arrayEmpty,
      };
    }
  },
  funSendOtpCheck: async function (obj, db) {
    try {
      let strOTP = obj.strOTP;
      let strEmail = obj.strEmail;
      let strNewPaswd = obj.strNewPaswd;

      let getAdminDetails = await customer.findOne({
        strEmail: strEmail,
        strStatus: "N",
      });

      if (getAdminDetails) {
        let checkOtp = await db
          .collection("cln_otp")
          .find({
            blnVerifiedStatus: false,
            strEmail: strEmail,
            strOTP: strOTP,
          })
          .toArray();
        if (checkOtp && checkOtp.length > 0) {
          let updateMatch = {
            strEmail: strEmail,
            strOTP: strOTP,
          };
          let updateData = {
            $set: {
              blnVerifiedStatus: true,
              dateUpdated: config.uaeTime(new Date()),
            },
          };

          let hashpassword = common.setPassword(strNewPaswd);

          if (!hashpassword)
            return {
              success: false,
              message: "Password encryption failed.",
              data: [],
            };

          let updatePasswd = await customer.updateOne(
            { strEmail: strEmail },

            {
              $set: {
                strPassword: hashpassword,
              },
            }
          );

          if (updatePasswd && updatePasswd.modifiedCount == 1) {
            let updateOtp = await db
              .collection("cln_otp")
              .updateOne(updateMatch, updateData);
            return {
              success: true,
              message: "Success.",
              data: updatePasswd,
            };
          } else {
            return {
              success: false,
              message: "Not matching any documents",
              data: arrayEmpty,
            };
          }
        } else {
          return {
            success: false,
            message: "OTP expired or wrong,Please try again.",
            data: arrayEmpty,
          };
        }
      } else {
        return {
          success: false,
          message: "Email is not matching",
          data: arrayEmpty,
        };
      }
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "System:" + error,
        data: arrayEmpty,
      };
    }
  },
  funGetTokenDecrypt: async function (obj, db) {
    try {
      console.log(jj)

      let userDetails = await customer.aggregate([
        {
          $match: {
            strEmail: strEmail,
            strStatus: "N",
          },
        },
        {
          $project: {
            fkUserId: 1,
            strEmail: 1,
            strName: 1,
            strPassword: 1,
            freeTrial: 1,
            strCountry: 1,
            strActive: true,
            strStatus: "N",
            _id: 0,
          },
        },
      ]);
      if (!userDetails.length > 0)
        return {
          success: false,
          message: "does not matching any documents",
          data: arrayEmpty,
        };
      let objLoginPassword = common.validPassword(strPassword);

      if (userDetails[0].strPassword != objLoginPassword)
        return {
          success: false,
          message: "Does not match the password.",
          data: [],
        };
      let objPasData = {
        strEmail: obj.strEmail,
        intUserId: userDetails[0].fkUserId,
      };

      const token = jwt.sign({ user: objPasData }, config.JWT_SECRET, {
        expiresIn: "60m",
      }); // 10 minutes expiration

      if (token) {
        userDetails[0].token = token;

        return {
          success: true,
          message: "Login success",
          data: userDetails[0],
        };
      } else {
        return {
          success: false,
          message: "Token implment failed",
          data: arrayEmpty,
        };
      }
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "System:" + error,
        data: arrayEmpty,
      };
    }
  },
  // funGetTokenDecrypt
};

async function sendEmail(otp, email) {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    // port:587,
    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.APP_PASSWD,
    },
  });

  transporter.verify((err, success) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Your config is correct", success);
    }
  });

  const emailTemplate = `
Dear User,

You recently requested to reset your password for your [Your Application] account. Please use the following One-Time Password (OTP) to proceed with the password reset:

OTP: [XXXXXX]

If you did not request a password reset, please ignore this email. This OTP is valid for [X] minutes.

Thank you,
`;
  const mailOptions = {
    from: process.env.SENDER_EMAIL,
    to: email,
    subject: "Your One-Time Password (OTP)",
    text: emailTemplate
      .replace("[Your Application]", "B_cards")
      .replace("[XXXXXX]", otp)
      .replace("[X]", "10"),
    // .replace("[Your Application Team]", "MyApp Team"),
    // cc: internals,
    // attachments: [
    //   {
    //     filename: "proposal.pdf",
    //     content: pdfBuffer,
    //   },
    // ],
  };

  const info = await transporter.sendMail(mailOptions);
  console.log("Email sent:", info.messageId);
  return info;
}
