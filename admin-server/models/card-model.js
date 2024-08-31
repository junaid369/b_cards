// Import mongoose
const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;
require("dotenv").config();
const moment = require("moment-timezone");

// Define the admin schema using mongoose.Schema
const cardSchema = new mongoose.Schema({
  fkBCardId: {
    type: mongoose.Types.ObjectId,
    default: new mongoose.Types.ObjectId(),
    required: [true, "bcard id is required"], // Name field is required
  },
  fkUserId: {
    type: mongoose.Types.ObjectId,
    default: new mongoose.Types.ObjectId(),
    required: [true, "user id is required"], // Name field is required
  },
  fkPlanId: {
    type: mongoose.Types.ObjectId,
    default: new mongoose.Types.ObjectId(),
    required: [true, "plan id is required"], // Name field is required
  },

  strFullName: {
    type: String,
    required: [true, "Name is required"], // Name field is required
  },
  strDesignation: {
    type: String,
    required: [true, "Designation is required"], // Email field is required
  },

  strDepartment: {
    type: String,
    required: [true, "Department is required"], // Name field is required
  },
  strCompany: {
    type: String,
    required: [true, "company is required"], // Name field is required
  },

  strStatus: {
    type: String,
  },
  strDescription: {
    type: String,
    // required: [true, "Description is required"], // Name field is required
  },
  strCardColor: {
    type: String,
    required: [true, "Color is required"], // Name field is required
  },
  planStartTime: {
    type: Date,
    required: [true, "Date is required"], // Name field is required
  },
  planEndTime: {
    type: Date,
    required: [true, "Date is required"], // Name field is required
  },
  arrContactDetails: {
    type: [],
    required: [true, "Contact is required"], // Name field is required
  },
  arrSocialLinks: {
    type: [],
    required: [true, "Social links is required"], // Name field is required
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
const Cards = mongoose.model(process.env.CARD_COLLECTION, cardSchema);

module.exports = { Cards };
