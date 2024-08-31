// Import mongoose
const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;
require("dotenv").config();
const moment = require("moment-timezone");

// Define the admin schema using mongoose.Schema
const planSchema = new mongoose.Schema({
  fkPlanId: {
    type: mongoose.Types.ObjectId,
    default: new mongoose.Types.ObjectId(),
    required: [true, "plan id is required"], // Name field is required
  },

  Amount: {
    type: String,
    required: [true, "Name is required"], // Name field is required
  },
  planName: {
    type: String,
    required: [true, "Name is required"], // Name field is required
  },
  templateLimit: {
    type: Number,
    required: [true, "Limit is required"], // Email field is required
  },

  customerDomain: {
    type: Boolean,
    required: [true, "country is required"], // Name field is required
  },
  cardSharing: {
    type: Boolean,
    required: [true, "Sharing status is required"], // Name field is required
  },
  appointmentType: {
    type: Boolean,
    required: [true, "Appointment  status is required"], // Name field is required
  },
  durationInDays: {
    type: Number,
    required: [true, "Days is required"], // Name field is required
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
const Plan = mongoose.model(process.env.PLAN_COLLECTION, planSchema);

module.exports = { Plan };
