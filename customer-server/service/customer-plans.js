const common = require("../global/common");
const mongoose = require("mongoose");
const { Plan } = require("../models/plan-model");
const config = require("../config/config");

module.exports = {
    funGetPlans: async function (obj, db) {
    try {
      let getPlans = await Plan.find({});

      if (getPlans) {
        return {
          success: true,
          message: "Success.",
          data: getPlans,
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
