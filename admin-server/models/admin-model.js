// Import mongoose
const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;
require("dotenv").config();
const moment = require("moment-timezone");

// Create banner schema
const adminModuleSchema = new mongoose.Schema({
  fkModuleId: {
    type: Schema.Types.ObjectId,
    default: new mongoose.Types.ObjectId(),
    immutable: true,
  },
  title: {
    type: String,
    required: [true, "Title is required"], // title field is required
  },
  path: {
    type: String,
  },
  icon: {
    type: String,
    required: [true, "icon is required"], // title field is required
  },
  sortNo: {
    type: Number,
  },
  strActiveStatus: {
    type: Boolean,
    required: [true, "modulestatus is required"], // title field is required
  },
  strStatus: {
    type: String,
    default: "N",
  },
  arrSubModule: [
    {
      _id: {
        type: String,
      },
      path: {
        type: String,
      },
      title: {
        type: String,
      },
    },
  ],
  type: {
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
});

//admin scehma

// Define module structure / schema
const adminModules = new mongoose.Schema(
  {
    fkModuleId: {
      type: mongoose.Types.ObjectId,
      required: [true, "Module details is required"],
    },
    subModules: {
      type: [mongoose.Types.ObjectId],
      required: [true, "At least one sub module is required"],
    },
  },

  { _id: false }
);

// Define the admin schema using mongoose.Schema
const adminSchema = new mongoose.Schema(
  {
    fkAdminId: {
      type: mongoose.Types.ObjectId,
      default: new mongoose.Types.ObjectId(),
      // immutable: true,
    },
    strEmail: {
      type: String,
      required: [true, "Email is required"], // Email field is required
    },
    strName: {
      type: String,
      required: [true, "Name is required"], // Name field is required
    },
    strPassword: {
      type: String,
      required: [true, "Password is required"], // Password field is required
      // select: false,
    },

    strUserType: {
      type: Number,
      required: [true, "User Type is required"], // Required filed
    },
    phone: {
      type: String,
    },
    country: {
      type: String,
      required: false,
    },


    FCMToken: {
      type: String,
    },

    strStatus: {
      type: String,
      // default: "P", // It will be either N or D or p. It will be changed to D when deleting it.
      required: [true, "status not provided"], // It is required field, checking user deleted or not.
    },

    arryModuleDetails: {
      type: [adminModules],
    },
    createdAt: {
      type: Date,
      // default: () => moment().tz("Asia/Dubai").toDate(),
    },
    updatedAt: {
      type: Date,
      // default: () => moment().tz("Asia/Dubai").toDate(),
    },
    strCreadtedUserId: {
      type: String,
    },
    strUpdatedUserId: {
      type: String,
    },
  },
  // {
  //   timestamps: true, // Add timestamps for createdAt and updatedAt fields
  // }

  {
    timestamps: {
      currentTime: () =>
        new Date().toLocaleString("en-US", { timeZone: "Asia/Dubai" }),
    },
  }
);

//logindetails schema
const adminLoginSchema = new mongoose.Schema(
  {
    fkAdminId: {
      type: mongoose.Types.ObjectId,
      required: [true, "Module details is required"],
    },
    data: {
      type: String,
    },
    strStatus: {
      type: String,
    },
  },
  // {
  //   timestamps: true, // Add timestamps for createdAt and updatedAt fields
  // }

  {
    timestamps: {
      currentTime: () =>
        new Date().toLocaleString("en-US", { timeZone: "Asia/Dubai" }),
    },
  }
);

//login schmea
const Login = mongoose.model(
  process.env.ADMIN_LOGIN_COLLECTION,
  adminLoginSchema
);

// Admin Model
const Admin = mongoose.model(process.env.ADMIN_COLLECTION, adminSchema);

// Module Model
const Module = mongoose.model(
  process.env.ADMIN_MODULES_COLLECTION,
  adminModuleSchema
);
module.exports = { Admin, Module, Login };
