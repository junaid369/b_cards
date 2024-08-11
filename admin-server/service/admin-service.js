// funAddAdminModules

const common = require("../global/common");
const mongoose = require("mongoose");
const { Admin, Module, Login } = require("../models/admin-model");
let jwt = require("jsonwebtoken");
const config = require("../config/config");
const moment = require("moment-timezone");
const { ObjectId } = require("mongodb");

const arrayEmpty = [];

module.exports = {
  //Add admin modules
  funAddAdminModules: async function (obj, db) {
    try {
      let araySub = [];
      let strLoginUserId = obj.strLoginUserId;

      if (!strLoginUserId) {
        return {
          success: false,
          message: "loginId missing.",
          data: arrayEmpty,
        };
      }

      let checkAdmin = await Admin.findOne({
        fkAdminId: new mongoose.Types.ObjectId(strLoginUserId),
        strUserType: 1,
        strStatus: "N",
      });
      if (!checkAdmin) {
        return {
          success: false,
          message:
            "Only the administrator has the ability to add new admin modules.",
          data: arrayEmpty,
        };
      }
      const now = moment().tz("Asia/Dubai").toDate();

      let module = {
        fkModuleId: new mongoose.Types.ObjectId(),
        title: obj?.title,
        path: obj?.path,
        icon: obj?.icon,
        sortNo: obj?.sortNo,
        strActiveStatus: obj?.strActiveStatus,
        type: obj?.type,
        arrSubModule: obj?.arrSubModule,
        strStatus: "N",
        createdAt: now,
      };

      module.arrSubModule
        ? module.arrSubModule.forEach((element) => {
            element._id = new mongoose.Types.ObjectId().toString();
            araySub.push(element);
          })
        : null;

      let updateUserModuels = await Module.create(module);

      if (updateUserModuels) {
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
      console.log(error);
      return {
        success: false,
        message: "System:" + error,
        data: arrayEmpty,
      };
    }
  },
  funUpdateAdminModules: async function (obj, db) {
    try {
      let araySub = [];
      let fkModuleId = obj.fkModuleId;

      let strLoginUserId = obj.strLoginUserId;

      if (!strLoginUserId) {
        return {
          success: false,
          message: "loginId missing.",
          data: arrayEmpty,
        };
      }

      let checkAdmin = await Admin.findOne({
        fkAdminId: new mongoose.Types.ObjectId(strLoginUserId),
        strUserType: 1,
        strStatus: "N",
      });
      if (!checkAdmin) {
        return {
          success: false,
          message:
            "Only the administrator has the ability to update admin modules.",
          data: arrayEmpty,
        };
      }
      if (!fkModuleId)
        return {
          success: false,
          message: "ModuleId Missing.",
          data: arrayEmpty,
        };

      const now = moment().tz("Asia/Dubai").toDate();

      let module = {
        title: obj?.title,
        path: obj?.path,
        icon: obj?.icon,
        sortNo: obj?.sortNo,
        strActiveStatus: obj?.strActiveStatus,
        type: obj?.type,
        arrSubModule: obj?.arrSubModule,
        strStatus: "N",
        updatedAt: now,
      };

      module.arrSubModule
        ? module.arrSubModule.forEach((element) => {
            element._id = new mongoose.Types.ObjectId().toString();
            araySub.push(element);
          })
        : null;

      let updateUserModuels = await Module.updateOne(
        { fkModuleId: new mongoose.Types.ObjectId(fkModuleId) },
        { $set: module }
      );

      if (updateUserModuels.modifiedCount == 1) {
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
  //delete modules
  funDeleteAdminModules: async function (obj, db) {
    try {
      let fkModuleId = obj.fkModuleId;
      let strLoginUserId = obj.strLoginUserId;

      if (!fkModuleId)
        return {
          success: false,
          message: "ModuleId Missing.",
          data: arrayEmpty,
        };

      let moduleMatch = {
        fkModuleId: new mongoose.Types.ObjectId(fkModuleId),
      };

      let updateUserModuels = await Module.updateOne(moduleMatch, {
        $set: { strStatus: "D" },
      });
      console.log(updateUserModuels);

      if (updateUserModuels) {
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
  //get admin modules
  funGetAdminModules: async function (obj, db) {
    try {
      let fkModuleId = obj.fkModuleId;
      let strActiveStatus = obj.strActiveStatus;

      let query1 = { strStatus: "N" };
      let query2 = {};
      let query3 = {};
      if (fkModuleId) {
        query2 = {
          fkModuleId: new mongoose.Types.ObjectId(fkModuleId),
        };
      }
      if (strActiveStatus) {
        query3 = {
          strActiveStatus: strActiveStatus,
        };
      }
      let match = { $and: [query1, query2, query3] };
      let getUserModules = await Module.find(match).sort({ sortNo: 1 });

      if (getUserModules && getUserModules.length) {
        return {
          success: true,
          message: "Success.",
          data: getUserModules,
        };
      } else {
        return {
          success: false,
          message: "No modules found.",
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
  //get adminlogin
  funGetAdminLogin: async function (obj, db) {
    try {
      let strEmail = obj.strEmail;
      let strPassword = obj.strPassword;

      let adminDetails = await Admin.aggregate([
        {
          $match: {
            strEmail: strEmail,
            strStatus: "N",
          },
        },
        {
          $project: {
            fkAdminId: 1,
            strUserLevel: 1,
            arrModuleDetails: 1,
            strUserType: 1,
            strPassword: 1,
            phone: 1,
            strName: 1,
            _id: 0,
          },
        },
      ]);

      if (!adminDetails.length > 0)
        return {
          success: false,
          message: "does not matching any documents",
          data: arrayEmpty,
        };
      let objLoginPassword = common.validPassword(strPassword);

      if (adminDetails[0].strPassword != objLoginPassword)
        return {
          success: false,
          message: "Does not match the password.",
          data: [],
        };
      let objPasData = {
        strEmail: obj.strEmail,
        intUserId: adminDetails[0].fkAdminId,
      };
      if (adminDetails[0].strUserType == 1) {
        let moduleDetails = await Module.find({ strStatus: "N" }).sort({
          sortNo: 1,
        });
        adminDetails[0].arryModuleDetails = moduleDetails;
      } else {
        let moduleDetails = await Admin.aggregate([
          {
            $match: {
              fkAdminId: new mongoose.Types.ObjectId(adminDetails[0].fkAdminId),
            },
          },
          {
            $lookup: {
              from: "cln_admin_modules",
              localField: "arryModuleDetails.fkModuleId",
              foreignField: "fkModuleId",
              as: "moduleDetails",
            },
          },
          {
            $unwind: "$moduleDetails", // Unwind the array to sort documents individually
          },
          {
            $sort: {
              "moduleDetails.sortNo": 1, // Sort based on the sortNo field
            },
          },
          {
            $group: {
              _id: "$_id", // Group back by _id
              fkAdminId: { $first: "$fkAdminId" },
              strEmail: { $first: "$strEmail" },
              strName: { $first: "$strName" },
              strPassword: { $first: "$strPassword" },
              strUserLevel: { $first: "$strUserLevel" },
              strUserType: { $first: "$strUserType" },
              strStatus: { $first: "$strStatus" },
              phone: { $first: "$phone" },
              arryModuleDetails: { $first: "$arryModuleDetails" },
              country: { $first: "$country" },
              createdAt: { $first: "$createdAt" },
              updatedAt: { $first: "$updatedAt" },
              __v: { $first: "$__v" },
              strUpdatedUserId: { $first: "$strUpdatedUserId" },
              moduleDetails: { $push: "$moduleDetails" }, // Push sorted documents back into array
            },
          },
          {
            $project: {
              "moduleDetails._id": 0,
              "moduleDetails.createdAt": 0,
              "moduleDetails.updatedAt": 0,
              "moduleDetails.__v": 0,
            },
          },
        ]);
        if (moduleDetails) {
          let adminIds = [];
          if (moduleDetails && moduleDetails.length > 0) {
            moduleDetails[0].arryModuleDetails.forEach(async (element) => {
              element.subModules.forEach((element) => {
                adminIds.push(element.toString());
              });
            });
          }

          //filter that id's with admin modules deatils array
          let validmoduels = [];
          moduleDetails[0].moduleDetails.forEach((element, index) => {
            element.arrSubModule.forEach((object) => {
              if (adminIds.includes(object._id.toString())) {
                validmoduels.push(object);
              } else {
              }
            });
            moduleDetails[0].moduleDetails[index].arrSubModule = validmoduels;
            validmoduels = [];
            index++;
          });
          adminDetails[0].arryModuleDetails = moduleDetails[0].moduleDetails;
        }
      }

      const token = jwt.sign({ user: objPasData }, config.JWT_SECRET, {
        expiresIn: "200m",
      }); // 10 minutes expiration

      if (token) {
        adminDetails[0].token = token;
        let insertToken = {
          fkAdminId: new mongoose.Types.ObjectId(adminDetails[0].fkAdminId),
          data: token,
          strStatus: "LOGIN",
          dateCreated: new Date(),
          dateUpdated: null,
        };
        let insertLoginDetails = await Login.create(insertToken);
        if (insertLoginDetails) {
          return {
            success: true,
            message: "Login success",
            data: adminDetails[0],
          };
        } else {
          return {
            success: true,
            message: "Login falied",
            data: arrayEmpty,
          };
        }
      } else {
        return {
          success: false,
          message: "Token implment failed",
          data: arrayEmpty,
        };
      }
    } catch (error) {
      console.log(error, "--");
      return {
        success: false,
        message: "System:" + error,
        data: arrayEmpty,
      };
    }
  },
  //add new admins
  funAddAdmin: async function (obj, db) {
    try {
      let strLoginUserId = obj.strLoginUserId;
      let arryModuleDetails = obj.arryModuleDetails || [];
      let strStatus = obj.strStatus;
      let strEmail = obj.strEmail;
      let strName = obj.strName;
      let strPassword = obj.strPassword;
      let phone = obj.phoneNo;
      let country = obj.strcountry;
      let strUserType = obj.strUserType;
      if (!strLoginUserId) {
        return {
          success: false,
          message: "loginId missing.",
          data: arrayEmpty,
        };
      }

      let checkAdmin = await Admin.findOne({
        fkAdminId: new mongoose.Types.ObjectId(strLoginUserId),
        strUserType: 1,
        strStatus: "N",
      });
      if (!checkAdmin) {
        return {
          success: false,
          message: "Only the administrator has the ability to add new admins.",
          data: arrayEmpty,
        };
      }
      if (!strPassword) {
        return {
          success: false,
          message: "password missing.",
          data: arrayEmpty,
        };
      }

      let checkMail = await Admin.findOne({
        strEmail: strEmail,
        strStatus: "N",
      });
      if (checkMail) {
        return {
          success: false,
          message: "Email is already registered.",
          data: arrayEmpty,
        };
      }
      let hashpassword = common.setPassword(strPassword);

      let adminDetails = {
        fkAdminId: new mongoose.Types.ObjectId(),
        strEmail: strEmail,
        strName: strName,
        strPassword: hashpassword,
        strUserType: strUserType,
        phone: phone,
        country: country,
        FCMToken: "",
        strStatus: strStatus,
        arryModuleDetails: arryModuleDetails,
        strCreadtedUserId: strLoginUserId,
        createdAt: config.uaeTime(new Date()),
      };

      if (adminDetails.strUserType == 1) {
        adminDetails.arryModuleDetails = [];
        adminDetails.officeDetails = [];
      }

      let insertAdmin = await Admin.create(adminDetails);

      if (insertAdmin) {
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
      console.log(error);
      return {
        success: false,
        message: "System:" + error,
        data: arrayEmpty,
      };
    }
  },
  //update admins
  funUpdateAdmin: async function (obj, db) {
    try {
      let strLoginUserId = obj.strLoginUserId;
      let fkAdminId = obj.fkAdminId;
      let arryModuleDetails = obj.arryModuleDetails || [];
      let strStatus = obj.strStatus;
      let strEmail = obj.strEmail;
      let strName = obj.strName;
      let phone = obj.phoneNo;
      let country = obj.strcountry;
      let strUserType = obj.strUserType;

      if (!fkAdminId && !strLoginUserId) {
        return {
          success: false,
          message: "matched AdminId  or loginId missing.",
          data: arrayEmpty,
        };
      }
      let checkAdmin = await Admin.findOne({
        fkAdminId: new mongoose.Types.ObjectId(strLoginUserId),
        strUserType: 1,
        strStatus: "N",
      });
      if (!checkAdmin) {
        return {
          success: false,
          message: "Only the administrator has the ability to update  admins.",
          data: arrayEmpty,
        };
      }

      let getAdminCount = await Admin.find({
        fkAdminId: new mongoose.Types.ObjectId(fkAdminId),
      });
      if (!getAdminCount.length) {
        return {
          success: false,
          message: "Not matching any document.",
          data: arrayEmpty,
        };
      }


      let adminDetails = {
        strEmail: strEmail,
        strName: strName,
        strUserType: strUserType,
        phone: phone,
        country: country,
        strStatus: strStatus,
        officeDetails: [
          { officeName: "Holiday uae", fkofficeId: "6656d619e168926113c5e9c3" },
        ],
        arryModuleDetails: arryModuleDetails,
        strUpdatedUserId: strLoginUserId,
        updatedAt: config.uaeTime(new Date()),
      };

      if (adminDetails.strUserType == 1) {
        adminDetails.arryModuleDetails = [];
        adminDetails.officeDetails = [];
      }



      let updateUserModuels = await Admin.updateOne(
        { fkAdminId: new mongoose.Types.ObjectId(fkAdminId) },
        { $set: adminDetails }
      );
      if (updateUserModuels.modifiedCount == 1) {
        let doc=getAdminCount[0]
        doc.Type="ADMIN"
        doc._id=new mongoose.Types.ObjectId()
        let insert = await db.collection("cln_history").insertOne(doc);
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

  funGetAllAdmins: async function (obj, db) {
    try {
      let strLoginUserId = obj.strLoginUserId;
      let fkAdminId = obj.fkAdminId;
      let strStatus = obj.strStatus;
      let strUserType = obj.strUserType;
      let intSkipCount = obj.intSkipCount;
      let intPageLimit = obj.intPageLimit;

      if (!strLoginUserId) {
        return {
          success: false,
          message: "Admin  id missing.",
          data: arrayEmpty,
        };
      }
      let query1 = { strStatus: "N" };

      let query2 = {};
      let query3 = {};

      if (strStatus) {
        query1 = { strStatus: strStatus || "N" };
      }

      if (fkAdminId) {
        query2 = {
          fkAdminId: new mongoose.Types.ObjectId(fkAdminId),
        };
      }
      // else if (adminsArrays) {
      //   // adminsList
      //   adminsArrays.forEach((element) => {
      //     adminsList.push(new mongoose.Types.ObjectId(element));
      //   });
      //   query3 = {
      //     fkAdminId: { $in: adminsList },
      //   };
      // }

      if (strUserType) {
        query2 = {
          strUserType: strUserType,
        };
      }
      let match = { $and: [query1, query2, query3] };
      console.log(match.$and);

      let getAdmin = await Admin.find({
        fkAdminId: new mongoose.Types.ObjectId(strLoginUserId),
      });
      if (!getAdmin.length)
        return {
          success: false,
          message: "not matching the adminid.",
          data: arrayEmpty,
        };

      let getAdminCount = await Admin.find(match).count();
      if (!intPageLimit) {
        intPageLimit = getAdminCount;
      }
      if (!intSkipCount) {
        intSkipCount = 0;
      }

      let getAllAdmins = await Admin.aggregate([
        { $match: match },
        {
          $project: {
            _id: 0,
            createdAt: 0,
            updatedAt: 0,
            __v: 0,
          },
        },
        { $skip: parseInt(intSkipCount) },
        { $limit: parseInt(intPageLimit) },
      ]);

      if (getAllAdmins.length) {
        return {
          success: true,
          message: "Success.",
          data: getAllAdmins,
          count: getAdminCount,
        };
      } else {
        return {
          success: false,
          message: "not matching.",
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
  funAdminLogout: async function (obj, db) {
    try {
      let strLoginUserId = obj.strLoginUserId;
      let strtoken = obj.strtoken;

      if (strLoginUserId) {
        let updateMatch = {
          fkAdminId: new mongoose.Types.ObjectId(strLoginUserId),
          strStatus: "LOGIN",
          data: strtoken,
        };

        let updateData = {
          $set: { strStatus: "LOGOUT" },
        };

        let updateUser = await Login.updateOne(updateMatch, updateData);
        if (updateUser && updateUser.modifiedCount == 1) {
          return {
            success: true,
            message: "Success",
            data: arrayEmpty,
          };
        } else {
          return {
            success: false,
            message: "Not matching",
            data: arrayEmpty,
          };
        }
      } else {
        return {
          success: false,
          message: "Please login to continue",
          data: arrayEmpty,
        };
      }
    } catch (error) {
      return {
        success: true,
        message: "System: " + error,
        data: arrayEmpty,
      };
    }
  },
  //update admin passwd
  funUpdateAdminPasswd: async function (obj, db) {
    try {
      let strLoginUserId = obj.strLoginUserId;
      let fkAdminId = obj.fkAdminId;
      let strPassword = obj.strPassword;

      let hashpassword = common.setPassword(strPassword);

      let updateModules = {
        $set: {
          strPassword: hashpassword,
          strUpdateUserId: strLoginUserId,
          updatedAt: config.uaeTime(new Date()),
        },
      };

      let userMatch = {
        fkAdminId: new mongoose.Types.ObjectId(fkAdminId),
      };

      let updateUserModuels = await Admin.updateOne(userMatch, updateModules);

      if (updateUserModuels) {
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
};
