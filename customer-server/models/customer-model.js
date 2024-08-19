// Import mongoose
const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;
require("dotenv").config();
const moment = require("moment-timezone");

// Define the admin schema using mongoose.Schema
const customerSchema = new mongoose.Schema({
  fkUserId: {
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

  strPhone: {
    type: String,
    required: [true, "PhoneNo is required"], // Name field is required
  },
  strPassword: {
    type: String,
    required: [true, "password is required"], // Name field is required
  },

  strStatus: {
    type: String,
  },
  strActive: {
    type: Boolean,
  },

  createdAt: {
    type: Date,
  },
});

// Admin Model
const customer = mongoose.model(
  process.env.CUSTOMER_COLLECTION,
  customerSchema
);

module.exports = { customer };
