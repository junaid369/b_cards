// funAddAdminModules

const common = require("../global/common");
const mongoose = require("mongoose");
const { customer } = require("../models/customer-model");
let jwt = require("jsonwebtoken");
const config = require("../config/config");
const moment = require("moment-timezone");
const { Admin, Module, Login } = require("../models/admin-model");

const arrayEmpty = [];

module.exports = {
  //get req no
  getCode: async function (obj, db) {
    try {
      let code = obj.code;

      let d = new Date();
      let year = d.getFullYear() + "";
      let yearTwo = year.substr(year.length - 2);
      let month = d.getMonth() + 1 + "";

      if (month.length == 1) {
        month = "0" + month;
      }

      let query = {
        strStatus: "N",
        code: code,
      };
      const update = {
        $inc: {
          strDocNo: 1,
        },
      };

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
  },
  funAddCustomer: async function (obj, db, code, code2) {
    try {
      let strLoginUserId = obj.strLoginUserId;
      let strName = obj.strName;
      let supplier_Name = obj.supplier_Name;
      let phone = obj.phoneNo;
      let strPackage = obj.strPackage;
      let cost_Price = obj.cost_Price;
      let selling_Price = obj.selling_Price;
      let profit_Price = obj.profit_Price;
      let vat = obj.vat;
      let per_Person = obj.per_Person;
      let no_Of_Persons = obj.no_Of_Persons;
      let Total_Amount = obj.Total_Amount;
      let travel_Date = obj.travel_Date;
      let strDescription = obj.strDescription;
      let cust_Code = code;
      let country = obj.country;
      let cost_Details = obj.cost_Details;

      if (!strLoginUserId) {
        return {
          success: false,
          message: "loginId missing.",
          data: arrayEmpty,
        };
      }
      let fkSupplierId = new mongoose.Types.ObjectId();
      let fkCustomerId = new mongoose.Types.ObjectId();

      const now = moment().tz("Asia/Dubai").toDate();

      checkAdminName = await Admin.findOne({
        fkAdminId: new mongoose.Types.ObjectId(strLoginUserId),
        strStatus: "N",
      });
      // console.log(checkAdminName,"---")
      if (!checkAdminName) {
        return {
          success: false,
          message: "Admin Id not matching.",
          data: arrayEmpty,
        };
      }

      let customerDetails = {
        cust_Code: cust_Code,
        sup_Code: code2,
        fkCustomerId: fkCustomerId,
        fkSupplierId: fkSupplierId,
        fkOfficeId: new mongoose.Types.ObjectId("6656d619e168926113c5e9c3"),
        strName: strName, //customer name
        supplier_Name: supplier_Name, //supplier name
        phone: phone,
        country: country,
        strPackage: strPackage,
        cost_Details: cost_Details,
        cost_Price: cost_Price,
        selling_Price: selling_Price,
        Total_Amount: Total_Amount,
        Total_Paid_Amount: 0,
        Service_Credit_Amount: 0,
        Service_Debit_Amount: 0,
        Refund_Amount: 0,
        profit_Price: profit_Price,
        vat: vat,
        strStatus: "N",
        per_Person: per_Person,
        no_Of_Persons: no_Of_Persons,
        profit_Release: false,
        travel_Date: new Date(travel_Date),
        strDescription: strDescription,
        createdAt: config.uaeTime(new Date()),
        strCreadtedUserId: strLoginUserId,
      };
      let supplierDetails = {
        cust_Code: cust_Code,
        sup_Code: code2,
        fkCustomerId: fkCustomerId,
        fkSupplierId: fkSupplierId,
        strName: supplier_Name, //supplier name
        customer_Name: strName, //customer name
        fkOfficeId: new mongoose.Types.ObjectId("6656d619e168926113c5e9c3"),
        strPackage: strPackage,
        Amount: cost_Price,
        Total_Paid_Amount: 0,
        Service_Credit_Amount: 0,
        Service_Debit_Amount: 0,
        Refund_Amount: 0,
        strStatus: "N",
        createdAt: config.uaeTime(new Date()),
        strCreadtedUserId: strLoginUserId,
      };

      let insertCustomer = await customer.create(customerDetails);

      let supplierInsert = await Supplier.create(supplierDetails);
      if (insertCustomer && supplierInsert) {
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
  //update admins
  funUpdateCustomer: async function (obj, db) {
    try {
      let strLoginUserId = obj.strLoginUserId;
      let fkCustomerId = obj.fkCustomerId;
      let fkSupplierId = obj.fkSupplierId;
      let strName = obj.strName;
      let supplier_Name = obj.supplier_Name;
      let country = obj.country;
      let phone = obj.phoneNo;
      let strPackage = obj.strPackage;
      let cost_Price = obj.cost_Price;
      let selling_Price = obj.selling_Price;
      let profit_Price = obj.profit_Price;
      let vat = obj.vat;
      let per_Person = obj.per_Person;
      let no_Of_Persons = obj.no_Of_Persons;
      let Total_Amount = obj.Total_Amount;
      let travel_Date = obj.travel_Date;
      let strDescription = obj.strDescription;
      let cost_Details = obj.cost_Details;

      if (!fkCustomerId && !strLoginUserId) {
        return {
          success: false,
          message: "matched customerId  or loginId missing.",
          data: arrayEmpty,
        };
      }
      let match = {
        fkCustomerId: new mongoose.Types.ObjectId(fkCustomerId),
        fkSupplierId: new mongoose.Types.ObjectId(fkSupplierId),
        strStatus: "N",
      };

      let getCustomerCount = await customer.find(match);
      let getSupplierCount = await Supplier.find(match);
      if (!getCustomerCount.length && !getSupplierCount.length) {
        return {
          success: false,
          message: "Not matching any document.",
          data: [],
        };
      }
      const now = moment().tz("Asia/Dubai").toDate();

      let customerDetails = {
        strName: strName,
        supplier_Name: supplier_Name, //supplier name
        phone: phone,
        country: country,
        strPackage: strPackage,
        cost_Details: cost_Details,
        cost_Price: cost_Price,
        selling_Price: selling_Price,
        profit_Price: profit_Price,
        vat: vat,
        per_Person: per_Person,
        no_Of_Persons: no_Of_Persons,
        Total_Amount: Total_Amount,
        travel_Date: new Date(travel_Date),
        strDescription: strDescription,
        updatedAt: config.uaeTime(new Date()),
        strUpdatedUserId: strLoginUserId,
      };
      let supplierDetails = {
        strName: supplier_Name, //supplier name
        customer_Name: strName, //customer name
        strPackage: strPackage,
        Amount: cost_Price,
        updatedAt: config.uaeTime(new Date()),
        strUpdatedUserId: strLoginUserId,
      };

      let updateCustomerDocument = await customer.updateOne(match, {
        $set: customerDetails,
      });
      let updateSupplierDocument = await Supplier.updateOne(match, {
        $set: supplierDetails,
      });

      if (
        updateCustomerDocument.modifiedCount == 1 &&
        updateSupplierDocument.matchedCount == 1
      ) {
        //update selling price and  in user customer cln and supplier cln
        let updateCustomerDocument = await payment.updateOne(
          {
            fkCustomerId: new mongoose.Types.ObjectId(fkCustomerId),
            fkSupplierId: new mongoose.Types.ObjectId(fkSupplierId),
            strStatus: "N",
            master_Doc: true,
          },
          {
            $set: {
              Total_Amount: Total_Amount,
            },
          }
        );
        let updateSupplierDocument = await paymentSup.updateOne(
          {
            fkCustomerId: new mongoose.Types.ObjectId(fkCustomerId),
            fkSupplierId: new mongoose.Types.ObjectId(fkSupplierId),
            strStatus: "N",
            master_Doc: true,
          },
          {
            $set: {
              Total_Amount: cost_Price,
            },
          }
        );

        //history
        getCustomerCount[0]._id = new mongoose.Types.ObjectId();
        getCustomerCount[0].type = "CUSTOMER";
        getSupplierCount[0].type = "SUPPLIER";
        let array = [getCustomerCount[0], getSupplierCount[0]];
        db.collection("cln_history").insertMany(array);
        // db.collection("cln_history").insertOne(getSupplierCount[0]);
        //customer update end

        //end
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
  //   delete customer
  funDeleteCustomer: async function (obj, db) {
    try {
      let strLoginUserId = obj.strLoginUserId;
      let fkCustomerId = obj.fkCustomerId;
      let fkSupplierId = obj.fkSupplierId;

      if (!fkCustomerId && !strLoginUserId) {
        return {
          success: false,
          message: "matched customerId  or loginId missing.",
          data: arrayEmpty,
        };
      }

      let match = {
        fkCustomerId: new mongoose.Types.ObjectId(fkCustomerId),
        fkSupplierId: new mongoose.Types.ObjectId(fkSupplierId),
        strStatus: "N",
      };

      let getCustomerCount = await customer.find(match);
      if (!getCustomerCount.length) {
        return {
          success: false,
          message: "Not matching any document.",
          data: arrayEmpty,
        };
      }
      const now = moment().tz("Asia/Dubai").toDate();
      let update = {
        strStatus: "D",
        updatedAt: config.uaeTime(new Date()),
      };

      let updateCustomerDocument = await customer.updateOne(match, {
        $set: update,
      });
      let updateSupplierDocument = await Supplier.updateOne(match, {
        $set: update,
      });

      if (
        updateCustomerDocument.modifiedCount == 1 &&
        updateSupplierDocument.modifiedCount == 1
      ) {
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
  funGetAllCustomer: async function (obj, db) {
    try {
      let strLoginUserId = obj.strLoginUserId;
      let fkCustomerId = obj.fkCustomerId;
      let strName = obj.strName;
      let fromDate = obj.fromDate;
      let endDate = obj.endDate;
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
      let query4 = {};
      let query5 = {};

      if (fkCustomerId) {
        query2 = {
          fkCustomerId: new mongoose.Types.ObjectId(fkCustomerId),
        };
      }

      if (strName) {
        query3 = {
          strName: strName,
        };
      }

      if (fromDate && endDate) {
        fromDate = new Date(fromDate);
        endDate = new Date(endDate);
        endDate.setHours(23, 0, 0, 0);

        query5 = {
          createdAt: {
            $gte: new Date(fromDate),
            $lte: new Date(endDate),
          },
        };
      }

      let match = {
        $and: [query1, query2, query3, query4, query5],
      };

      let getCustomerCount = await customer.find(match).count();
      if (!intPageLimit) {
        intPageLimit = getCustomerCount;
      }
      if (!intSkipCount) {
        intSkipCount = 0;
      }

      const getAllCustomer = await customer.aggregate([
        { $match: match },
        { $sort: { _id: -1 } },
        { $skip: parseInt(intSkipCount) },
        { $limit: parseInt(intPageLimit) },
        {
          $project: {
            _id: 0,
            fkCustomerId: 1,
            strName: 1,
            strEmail: 1,
            createdAt: 1,
            updatedAt: 1, // Set to empty string if updatedAt is not present
            strStatus: 1,
          },
        },
      ]);

      if (getAllCustomer.length) {
        return {
          success: true,
          message: "Success.",
          count: getCustomerCount,
          data: getAllCustomer,
        };
      } else {
        return {
          success: false,
          message: "not matching.",
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

  funProfitRelease: async function (obj, db) {
    try {
      let strLoginUserId = obj.strLoginUserId;
      let fkCustomerId = obj.fkCustomerId;
      let profit_Release = obj.profit_Release;
      let profit_Date = obj.profit_Date;

      if (!fkCustomerId && !strLoginUserId) {
        return {
          success: false,
          message: "matched customerId  or loginId missing.",
          data: arrayEmpty,
        };
      }

      let match = {
        fkCustomerId: new mongoose.Types.ObjectId(fkCustomerId),
        strStatus: "N",
      };
      let updateDetails;
      if (profit_Release && profit_Date) {
        updateDetails = {
          profit_Release: profit_Release,
          profit_Date: profit_Date,
        };
      } else {
        updateDetails = {
          profit_Release: false,
          profit_Date: config.uaeTime(new Date()),
        };
      }

      let updateCustomerDocument = await customer.updateOne(match, {
        $set: updateDetails,
      });

      if (updateCustomerDocument.modifiedCount == 1) {
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
