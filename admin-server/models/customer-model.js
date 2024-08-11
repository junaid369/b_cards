// Import mongoose
const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;
require("dotenv").config();
const moment = require("moment-timezone");

// Define the admin schema using mongoose.Schema
const customerSchema = new mongoose.Schema({
  fkCustomerId: {
    type: mongoose.Types.ObjectId,
    default: new mongoose.Types.ObjectId(),
    required: [true, "customer id is required"], // Name field is required
  },

  strName: {
    type: String,
    required: [true, "Name is required"], // Name field is required
  },
  strEmail: {
    type: String,
    // required: [true, "Email is required"], // Email field is required
  },
 
  country: {
    type: String,
    required: [true, "country is required"], // Name field is required
  },
  strPassword: {
    type: String,
    required: [true, "country is required"], // Name field is required
  },

  
  strStatus: {
    type: String,
  },
  strDescription: {
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

// Admin Model
const customer = mongoose.model(
  process.env.CUSTOMER_COLLECTION,
  customerSchema
);

module.exports = { customer };
