// Import mongoose
const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;
require("dotenv").config();
const moment = require("moment-timezone");

// Define the admin schema using mongoose.Schema
const orderSchema = new mongoose.Schema({
  fkBCardId: {
    type: mongoose.Types.ObjectId,
    default: new mongoose.Types.ObjectId(),
    required: [true, "business id is required"], // Name field is required
  },
  fkUserId: {
    type: mongoose.Types.ObjectId,
    default: new mongoose.Types.ObjectId(),
    required: [true, "user id is required"], // Name field is required
  },
  fkPlanId: {
    type: String,
    default: new mongoose.Types.ObjectId(),
    required: [true, "plan id is required"], // Name field is required
  },
  OrderId: {
    type: String,
    required: [true, "Orderid is required"], // Name field is required
  },
  paymentMethod: {
    type: String,
    required: [true, "PaymentMethode is required"], // Name field is required
  },
  Coupon: {
    type: String,
  },
  paymentStatus: {
    type: String,
    required: [true, "PaymentStatus is required"], // Name field is required
  },
  Amount: {
    type: String,
    required: [true, "amount is required"], // Name field is required
  },

  strStatus: {
    type: String,
  },

  createdAt: {
    type: Date,
    default: () => moment().tz("Asia/Dubai").toDate(),
  },
  updatedAt: {
    type: Date,
    default: () => moment().tz("Asia/Dubai").toDate(),
  },
  strCreadtedUserId: {
    type: String,
  },
  strUpdatedUserId: {
    type: String,
  },
});

// plan Model
const Order = mongoose.model(process.env.ORDER_COLLECTION, orderSchema);

module.exports = { Order };
