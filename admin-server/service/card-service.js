// funAddPlanPlans

const common = require("../global/common");
const mongoose = require("mongoose");
const { Cards } = require("../models/card-model");
const { Plan } = require("../models/plan-models");
const { Order } = require("../models/order-model");
let jwt = require("jsonwebtoken");
const config = require("../config/config");
const moment = require("moment-timezone");
const { ObjectId } = require("mongodb");

const arrayEmpty = [];

module.exports = {
  funCreateBCard: async function (obj, db) {
    try {
      let strLoginUserId = obj.strLoginUserId;

      if (!strLoginUserId) {
        return {
          success: false,
          message: "loginId missing.",
          data: arrayEmpty,
        };
      }
      let planDetails = await Plan.findOne({
        fkPlanId: new mongoose.Types.ObjectId(obj.fkPlanId),
        strStatus: "N",
      });
      if (!planDetails) {
        return {
          success: false,
          message: "Plan details is not available.",
          data: arrayEmpty,
        };
      }

      let insert = {
        fkUserId: new mongoose.Types.ObjectId(obj.fkUserId),
        fkBCardId: new mongoose.Types.ObjectId(),
        fkPlanId: obj.fkPlanId,
        strFullName: obj.strFullName,
        strDesignation: obj.strDesignation,
        strDepartment: obj.strDepartment,
        strCompany: obj.strCompany,
        strDescription: obj.strDescription,
        strCardColor: obj.strCardColor,
        planStartTime: obj.planStartTime,
        strStatus: "N",
        planEndTime: obj.planEndTime,
        arrContactDetails: obj.arrContactDetails,
        arrSocialLinks: obj.arrSocialLinks,
        strCreadtedUserId: strLoginUserId,
        createdAt: config.uaeTime(new Date()),
      };

      let insertCard = await Cards.create(insert);

      if (insertCard) {
        //order generating
        let result = await getCode(obj, db);
        console.log(planDetails, "00000");

        let orderInsert = {
          fkUserId: new mongoose.Types.ObjectId(obj.fkUserId),
          fkBCardId: new mongoose.Types.ObjectId(insert.fkBCardId),
          fkPlanId: new mongoose.Types.ObjectId(obj.fkPlanId),
          OrderId: result.data,
          Amount: planDetails.Amount || 100,
          planName: planDetails.planName,
          strStatus: "N",
          paymentMethod: "NIL",
          Coupon: "NIL",
          paymentStatus: "PENDING",
          createdAt: config.uaeTime(new Date()),
        };
        let insertOrder = await Order.create(orderInsert);
        if (insertOrder) {
          return {
            success: true,
            message: "Success.",
            data: arrayEmpty,
          };
        } else {
          return {
            success: false,
            message: "Order creating failed.",
            data: arrayEmpty,
          };
        }
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
  funUpdateBCards: async function (obj, db) {
    try {
      let fkBCardId = obj.fkBCardId;
      let strLoginUserId = obj.strLoginUserId;

      if (!strLoginUserId) {
        return {
          success: false,
          message: "loginId missing.",
          data: arrayEmpty,
        };
      }

      if (!fkBCardId)
        return {
          success: false,
          message: "PlanId Missing.",
          data: arrayEmpty,
        };

      let checkCard = await Cards.findOne({
        fkBCardId: new mongoose.Types.ObjectId(obj.fkBCardId),
        strStatus: "N",
      });
      if (!checkCard) {
        return {
          success: false,
          message: "Not matching any documents",
          data: arrayEmpty,
        };
      }

      let planDetails = await Plan.findOne({
        fkPlanId: new mongoose.Types.ObjectId(obj.fkPlanId),
        strStatus: "N",
      });
      if (!planDetails) {
        return {
          success: false,
          message: "Plan details is not available.",
          data: arrayEmpty,
        };
      }

      let update = {
        strLoginUserId: obj.strLoginUserId,
        fkUserId: obj.fkUserId,
        fkPlanId: obj.fkPlanId,
        strFullName: obj.strFullName,
        strDesignation: obj.strDesignation,
        strDepartment: obj.strDepartment,
        strCompany: obj.strCompany,
        strDescription: obj.strDescription,
        strCardColor: obj.strCardColor,
        planStartTime: obj.planStartTime,
        strStatus: "N",
        planEndTime: obj.planEndTime,
        arrContactDetails: obj.arrContactDetails,
        arrSocialLinks: obj.arrSocialLinks,
        strUpdatedUserId: strLoginUserId,
        updatedAt: config.uaeTime(new Date()),
      };

      let updateCard = await Cards.updateOne(
        {
          fkBCardId: new mongoose.Types.ObjectId(obj.fkBCardId),
        },
        { $set: update }
      );

      if (updateCard.modifiedCount == 1) {
        if (checkCard.fkPlanId != obj.fkPlanId) {
          let updateOrder = await Order.updateOne(
            {
              fkBCardId: new mongoose.Types.ObjectId(obj.fkBCardId),
              strStatus: "N",
            },
            {
              $set: {
                fkPlanId: new mongoose.Types.ObjectId(obj.fkPlanId),
                Amount: planDetails.Amount || 100,
                planName: planDetails.planName,
                updatedAt: config.uaeTime(new Date()),
              },
            }
          );
          if (updateOrder.modifiedCount == 1) {
            return {
              success: true,
              message: "Success.",
              data: arrayEmpty,
            };
          } else {
            return {
              success: false,
              message: "Order updation failed.",
              data: arrayEmpty,
            };
          }
        } else {
          return {
            success: true,
            message: "Success.",
            data: arrayEmpty,
          };
        }
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
  funDeleteBCards: async function (obj, db) {
    try {
      let fkBCardId = obj.fkBCardId;
      let strLoginUserId = obj.strLoginUserId;

      if (!fkBCardId)
        return {
          success: false,
          message: "PlanId Missing.",
          data: arrayEmpty,
        };

      let cardMatch = {
        fkBCardId: new mongoose.Types.ObjectId(fkBCardId),
      };

      let deleteCard = await Cards.updateOne(cardMatch, {
        $set: {
          strStatus: "D",
          strUpdatedUserId: strLoginUserId,
          updatedAt: config.uaeTime(new Date()),
        },
      });

      if (deleteCard) {
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
  funGetBCards: async function (obj, db) {
    try {
      let fkBCardId = obj.fkBCardId;
      let fkPlanId = obj.fkPlanId;

      let query1 = { strStatus: "N" };
      let query2 = {};
      let query3 = {};
      if (fkBCardId) {
        query2 = {
          fkBCardId: new mongoose.Types.ObjectId(fkBCardId),
        };
      }
      if (fkPlanId) {
        query3 = {
          fkPlanId: new mongoose.Types.ObjectId(fkPlanId),
        };
      }

      let match = { $and: [query1, query2, query3] };
      let getUserCards = await Cards.find(match).sort({ sortNo: 1 });

      if (getUserCards && getUserCards.length) {
        return {
          success: true,
          message: "Success.",
          data: getUserCards,
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
  funGetOrders: async function (obj, db) {
    try {
      let fkPlanId = obj.fkPlanId;
      let fkUserId = obj.fkUserId;

      let query1 = { strStatus: "N" };
      let query2 = {};
      let query3 = {};
      if (fkUserId) {
        query2 = {
          fkUserId: new mongoose.Types.ObjectId(fkUserId),
        };
      }
      if (fkPlanId) {
        query3 = {
          fkPlanId: new mongoose.Types.ObjectId(fkPlanId),
        };
      }

      let match = { $and: [query1, query2, query3] };
      let getUserOrders = await Order.find(match).sort({ sortNo: 1 });

      if (getUserOrders && getUserOrders.length) {
        return {
          success: true,
          message: "Success.",
          data: getUserOrders,
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

async function getCode(obj, db) {
  try {
    let d = new Date();
    let year = d.getFullYear() + "";
    let yearTwo = year.substr(year.length - 2);
    let month = d.getMonth() + 1 + "";

    if (month.length == 1) {
      month = "0" + month;
    }

    let query = {
      strStatus: "N",
    };
    const update = {
      $inc: {
        strDocNo: 1,
      },
    };
    let code = "BCARD";

    const options = { returnNewDocument: true };
    let strOrderNumber = code + yearTwo + month + "0001";

    let fetchOrderNumber = await db
      .collection("cln_code")
      .findOneAndUpdate(query, update, options);
    if (fetchOrderNumber && fetchOrderNumber) {
      let OrderNumber = parseInt(fetchOrderNumber.strDocNo);
      let nextOrderNumber = OrderNumber + 1 + "";
      if (nextOrderNumber.length == 1) {
        nextOrderNumber = "00000" + nextOrderNumber;
      } else if (nextOrderNumber.length == 2) {
        nextOrderNumber = "0000" + nextOrderNumber;
      } else if (nextOrderNumber.length == 3) {
        nextOrderNumber = "000" + nextOrderNumber;
      } else if (nextOrderNumber.length == 4) {
        nextOrderNumber = "00" + nextOrderNumber;
      } else if (nextOrderNumber.length == 5) {
        nextOrderNumber = "0" + nextOrderNumber;
      } else {
        nextOrderNumber = nextOrderNumber;
      }
      strOrderNumber = code + yearTwo + month + nextOrderNumber;
      // let lastUsedMonth = fetchOrderNumber.strDate;
      // let matchMonth = lastUsedMonth + "";

      // if (month !== matchMonth) {
      //   strOrderNumber = code + yearTwo + month + "000001";
      //   count = 1;
      //   let update = {
      //     strDocNo: count,
      //     strDate: month,
      //     dateCreateDateAndTime: new Date(),
      //   };
      //   let insertdoc = await db
      //     .collection("cln_code")
      //     .updateOne(query, { $set: update });
      //   if (insertdoc && insertdoc.modifiedCount == 1) {
      //     return {
      //       success: true,
      //       message: "Success",
      //       data: strOrderNumber, //supplier code
      //     };
      //   } else {
      //     return {
      //       success: false,
      //       message: "Proposal number is not getting",
      //       data: arrayEmpty,
      //     };
      //   }
      // } else {
      return {
        success: true,
        message: "Success",
        data: strOrderNumber,
      };
      // }
    } else {
      return {
        success: false,
        message: "Proposal number is not getting",
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
}
