// funAddPlanPlans

const common = require("../global/common");
const mongoose = require("mongoose");
const { Plan } = require("../models/plan-models");
let jwt = require("jsonwebtoken");
const config = require("../config/config");
const moment = require("moment-timezone");
const { ObjectId } = require("mongodb");

const arrayEmpty = [];

module.exports = {
  //Add Plan Plans
  funCreatePLan: async function (obj, db) {
    try {
      let strLoginUserId = obj.strLoginUserId;

      if (!strLoginUserId) {
        return {
          success: false,
          message: "loginId missing.",
          data: arrayEmpty,
        };
      }
      let insert = {
        fkPlanId: new mongoose.Types.ObjectId(),
        planName: obj.planName,
        templateLimit: obj.templateLimit,
        customerDomain: obj.customerDomain,
        cardSharing: obj.cardSharing,
        appointmentType: obj.appointmentType,
        durationInDays: obj.durationInDays,
        strStatus: "N",
        createdAt: config.uaeTime(new Date()),
      };

      let insertPlan = await Plan.create(insert);

      if (insertPlan) {
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
  funUpdatePlan: async function (obj, db) {
    try {
      let fkPlanId = obj.fkPlanId;
      let strLoginUserId = obj.strLoginUserId;

      if (!strLoginUserId) {
        return {
          success: false,
          message: "loginId missing.",
          data: arrayEmpty,
        };
      }

      let checkPlan = await Plan.findOne({
        fkPlanId: new mongoose.Types.ObjectId(strLoginUserId),
        strUserType: 1,
        strStatus: "N",
      });
      if (!checkPlan) {
        return {
          success: false,
          message:
            "Only the administrator has the ability to update Plan Plans.",
          data: arrayEmpty,
        };
      }
      if (!fkPlanId)
        return {
          success: false,
          message: "PlanId Missing.",
          data: arrayEmpty,
        };

      let update = {
        planName: obj.planName,
        templateLimit: obj.templateLimit,
        customerDomain: obj.customerDomain,
        cardSharing: obj.cardSharing,
        appointmentType: obj.appointmentType,
        durationInDays: obj.durationInDays,
        updatedAt: config.uaeTime(new Date()),
      };

      let updatePlans = await Plan.updateOne(
        { fkPlanId: new mongoose.Types.ObjectId(fkPlanId) },
        { $set: update }
      );

      if (updatePlans.modifiedCount == 1) {
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
  //delete Plans
  funDeletePlan: async function (obj, db) {
    try {
      let fkPlanId = obj.fkPlanId;
      let strLoginUserId = obj.strLoginUserId;

      if (!fkPlanId)
        return {
          success: false,
          message: "PlanId Missing.",
          data: arrayEmpty,
        };

      let PlanMatch = {
        fkPlanId: new mongoose.Types.ObjectId(fkPlanId),
      };

      let deletePlan = await Plan.updateOne(PlanMatch, {
        $set: { strStatus: "D" },
      });

      if (deletePlan) {
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
  //get Plan Plans
  funGetPlans: async function (obj, db) {
    try {
      let fkPlanId = obj.fkPlanId;

      let query1 = { strStatus: "N" };
      let query2 = {};
      let query3 = {};
      if (fkPlanId) {
        query2 = {
          fkPlanId: new mongoose.Types.ObjectId(fkPlanId),
        };
      }
  
      let match = { $and: [query1, query2] };
      let getUserPlans = await Plan.find(match).sort({ sortNo: 1 });

      if (getUserPlans && getUserPlans.length) {
        return {
          success: true,
          message: "Success.",
          data: getUserPlans,
        };
      } else {
        return {
          success: false,
          message: "No Plans found.",
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
