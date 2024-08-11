const common = require("../global/common");
const mongoose = require("mongoose");
const { customer } = require("../models/customer-model");
let jwt = require("jsonwebtoken");
const config = require("../config/config");
const moment = require("moment-timezone");

const arrayEmpty = [];

module.exports = {
  funGetDashbord: async function (obj, db) {
    try {
      let strLoginUserId = obj.strLoginUserId;
      let strFromDate = "";
      let strEndDate = "";

      if (!strLoginUserId) {
        return {
          success: false,
          message: "Admin  id missing.",
          data: arrayEmpty,
        };
      }

      if (obj.strFromDate && obj.strEndDate) {
        strFromDate = new Date(obj.strFromDate);
        strEndDate = new Date(obj.strEndDate);
      } else {
        strEndDate = config.uaeTime(new Date());

        // Subtract 90 days
        strFromDate = config.uaeTime(new Date());
        strFromDate.setDate(strFromDate.getDate() - 560);
      }

      let current = config.uaeTime(new Date());

      let suppDetails = await paymentSup.aggregate([
        {
          $facet: {
            //find pending total in supplier
            pending: [
              {
                $match: {
                  strStatus: "N",
                  createdAt: {
                    $gte: new Date(strFromDate),
                    $lte: new Date(strEndDate),
                  },
                },
              },

              {
                $unwind: "$payment_Details",
              },
              {
                $match: {
                  "payment_Details.paymentStatus": "PENDING",
                  "payment_Details.strStatus": "N",
                  // strStatus:"N"
                },
              },

              {
                $group: {
                  _id: null,
                  totalAmount: {
                    $sum: {
                      $cond: [
                        { $eq: ["$payment_Details.type", "PAID"] },
                        "$payment_Details.amount",
                        0,
                      ],
                    },
                  },

                  totalPendingServiceCreditAmount: {
                    $sum: {
                      $cond: [
                        {
                          $and: [
                            { $eq: ["$payment_Details.type", "SERVICE"] },
                            { $eq: ["$payment_Details.mode", "Credit"] },
                          ],
                        },
                        "$payment_Details.amount",
                        0,
                      ],
                    },
                  },
                  totalPendingServiceDebitAmount: {
                    $sum: {
                      $cond: [
                        {
                          $and: [
                            { $eq: ["$payment_Details.type", "SERVICE"] },
                            { $eq: ["$payment_Details.mode", "Debit"] },
                          ],
                        },
                        "$payment_Details.amount",
                        0,
                      ],
                    },
                  },
                  count: { $sum: 1 },
                },
              },
            ],
            //find verify other amounts in supplier
            verify: [
              {
                $match: {
                  $expr: {
                    $and: [
                      { $eq: ["$strStatus", "N"] },
                      { $gte: ["$createdAt", new Date(strFromDate)] },
                      { $lte: ["$createdAt", new Date(strEndDate)] },
                    ],
                  },
                },
              },
              {
                $unwind: "$payment_Details",
              },
              {
                $match: {
                  "payment_Details.paymentStatus": "VERIFY",
                  "payment_Details.strStatus": "N",
                },
              },

              {
                $group: {
                  _id: null,

                  totalPaidAmount: {
                    $sum: {
                      $cond: [
                        { $eq: ["$payment_Details.type", "PAID"] },
                        "$payment_Details.amount",
                        0,
                      ],
                    },
                  },
                  totalRefundAmount: {
                    $sum: {
                      $cond: [
                        { $eq: ["$payment_Details.type", "REFUND"] },
                        "$payment_Details.amount",
                        0,
                      ],
                    },
                  },

                  totalServiceCreditAmount: {
                    $sum: {
                      $cond: [
                        {
                          $and: [
                            { $eq: ["$payment_Details.type", "SERVICE"] },
                            { $eq: ["$payment_Details.mode", "Credit"] },
                          ],
                        },
                        "$payment_Details.amount",
                        0,
                      ],
                    },
                  },
                  totalServiceDebitAmount: {
                    $sum: {
                      $cond: [
                        {
                          $and: [
                            { $eq: ["$payment_Details.type", "SERVICE"] },
                            { $eq: ["$payment_Details.mode", "Debit"] },
                          ],
                        },
                        "$payment_Details.amount",
                        0,
                      ],
                    },
                  },

                  count: { $sum: 1 }, // Count documents in verify stage
                },
              },
            ],

            SupplierOtherDetails: [
              {
                $lookup: {
                  from: "cln_suppliers", // replace with your actual collection name
                  pipeline: [
                    {
                      $match: {
                        $expr: {
                          $and: [
                            { $eq: ["$strStatus", "N"] },

                            { $gte: ["$createdAt", new Date(strFromDate)] },
                            { $lte: ["$createdAt", new Date(strEndDate)] },
                          ],
                        },
                      },
                    },

                    {
                      $group: {
                        _id: null,
                        totalPaidAmount: {
                          $sum: "$Total_Paid_Amount",
                        },
                        totalRefundAmount: {
                          $sum: "$Refund_Amount",
                        },

                        totalServiceCreditAmount: {
                          $sum: "$Service_Credit_Amount",
                        },
                        totalServiceDebitAmount: {
                          $sum: "$Service_Debit_Amount",
                        },
                        count: { $sum: 1 },
                      },
                    },
                  ],
                  as: "supplierVerifyCase",
                },
              },
              {
                $unwind: {
                  path: "$supplierVerifyCase",
                  preserveNullAndEmptyArrays: true,
                },
              },
            ],
            //find pending total in customer
            customerPending: [
              {
                $lookup: {
                  from: "cln_payment_details_cus", // replace with your actual collection name
                  // let: { fkCustomerId: "$_id" },
                  pipeline: [
                    {
                      $match: {
                        $expr: {
                          $and: [
                            { $eq: ["$strStatus", "N"] },

                            { $gte: ["$createdAt", new Date(strFromDate)] },
                            { $lte: ["$createdAt", new Date(strEndDate)] },
                          ],
                        },
                      },
                    },
                    {
                      $unwind: "$payment_Details",
                    },
                    {
                      $match: {
                        "payment_Details.paymentStatus": "PENDING",
                        "payment_Details.strStatus": "N",
                      },
                    },

                    {
                      $group: {
                        _id: null,
                        totalAmount: {
                          $sum: {
                            $cond: [
                              { $eq: ["$payment_Details.type", "PAID"] },
                              "$payment_Details.amount",
                              0,
                            ],
                          },
                        },

                        totalServiceCreditAmount: {
                          $sum: {
                            $cond: [
                              {
                                $and: [
                                  { $eq: ["$payment_Details.type", "SERVICE"] },
                                  { $eq: ["$payment_Details.mode", "Credit"] },
                                ],
                              },
                              "$payment_Details.amount",
                              0,
                            ],
                          },
                        },

                        totalServiceDebitAmount: {
                          $sum: {
                            $cond: [
                              {
                                $and: [
                                  { $eq: ["$payment_Details.type", "SERVICE"] },
                                  { $eq: ["$payment_Details.mode", "Debit"] },
                                ],
                              },
                              "$payment_Details.amount",
                              0,
                            ],
                          },
                        },
                        count: { $sum: 1 },
                      },
                    },
                  ],
                  as: "customerPendingCase",
                },
              },
              {
                $unwind: {
                  path: "$customerPendingCase",
                  preserveNullAndEmptyArrays: true,
                },
              },
            ],
            //find verify totals in customer
            customerVerify: [
              {
                $lookup: {
                  from: "cln_payment_details_cus", // replace with your actual collection name
                  pipeline: [
                    {
                      $match: {
                        $expr: {
                          $and: [
                            { $eq: ["$strStatus", "N"] },

                            { $gte: ["$createdAt", new Date(strFromDate)] },
                            { $lte: ["$createdAt", new Date(strEndDate)] },
                          ],
                        },
                      },
                    },

                    {
                      $unwind: "$payment_Details",
                    },
                    {
                      $match: {
                        "payment_Details.paymentStatus": "VERIFY",
                        "payment_Details.strStatus": "N",
                      },
                    },
                    {
                      $group: {
                        _id: null,

                        totalPaidAmount: {
                          $sum: {
                            $cond: [
                              { $eq: ["$payment_Details.type", "PAID"] },
                              "$payment_Details.amount",
                              0,
                            ],
                          },
                        },
                        totalRefundAmount: {
                          $sum: {
                            $cond: [
                              { $eq: ["$payment_Details.type", "REFUND"] },
                              "$payment_Details.amount",
                              0,
                            ],
                          },
                        },

                        totalServiceCreditAmount: {
                          $sum: {
                            $cond: [
                              {
                                $and: [
                                  { $eq: ["$payment_Details.type", "SERVICE"] },
                                  { $eq: ["$payment_Details.mode", "Credit"] },
                                ],
                              },
                              "$payment_Details.amount",
                              0,
                            ],
                          },
                        },
                        totalServiceDebitAmount: {
                          $sum: {
                            $cond: [
                              {
                                $and: [
                                  { $eq: ["$payment_Details.type", "SERVICE"] },
                                  { $eq: ["$payment_Details.mode", "Debit"] },
                                ],
                              },
                              "$payment_Details.amount",
                              0,
                            ],
                          },
                        },

                        count: { $sum: 1 },
                      },
                    },
                  ],
                  as: "customerVerifyCase",
                },
              },
              {
                $unwind: {
                  path: "$customerVerifyCase",
                  preserveNullAndEmptyArrays: true,
                },
              },
            ],
            customerOtherDetails: [
              {
                $lookup: {
                  from: "cln_customers", // replace with your actual collection name
                  pipeline: [
                    {
                      $match: {
                        $expr: {
                          $and: [
                            { $eq: ["$strStatus", "N"] },

                            { $gte: ["$createdAt", new Date(strFromDate)] },
                            { $lte: ["$createdAt", new Date(strEndDate)] },
                          ],
                        },
                      },
                    },

                    {
                      $group: {
                        _id: null,
                        totalPaidAmount: {
                          $sum: "$Total_Paid_Amount",
                        },
                        totalRefundAmount: {
                          $sum: "$Refund_Amount",
                        },

                        totalServiceCreditAmount: {
                          $sum: "$Service_Credit_Amount",
                        },
                        totalServiceDebitAmount: {
                          $sum: "$Service_Debit_Amount",
                        },
                        count: { $sum: 1 },
                      },
                    },
                  ],
                  as: "customerVerifyCase",
                },
              },
              {
                $unwind: {
                  path: "$customerVerifyCase",
                  preserveNullAndEmptyArrays: true,
                },
              },
            ],
            //customer ongoing trips
            onGoingTrips: [
              {
                $lookup: {
                  from: "cln_customers",
                  pipeline: [
                    {
                      $match: {
                        $expr: {
                          $and: [
                            { $eq: ["$strStatus", "N"] },
                            { $gt: ["$travel_Date", current] },
                            { $gte: ["$createdAt", new Date(strFromDate)] },
                            { $lte: ["$createdAt", new Date(strEndDate)] },
                          ],
                        },
                      },
                    },
                    {
                      $group: {
                        _id: null,

                        count: { $sum: 1 },
                      },
                    },
                  ],
                  as: "onGoingTrips",
                },
              },
              {
                $unwind: {
                  path: "$onGoingTrips",
                  preserveNullAndEmptyArrays: true,
                },
              },
            ],
            //customer complete trips
            completedTrips: [
              {
                $lookup: {
                  from: "cln_customers",
                  pipeline: [
                    {
                      $match: {
                        $expr: {
                          $and: [
                            { $eq: ["$strStatus", "N"] },
                            { $lt: ["$travel_Date", current] },
                            { $gte: ["$createdAt", new Date(strFromDate)] },
                            { $lte: ["$createdAt", new Date(strEndDate)] },
                          ],
                        },
                      },
                    },
                    {
                      $group: {
                        _id: null,

                        count: { $sum: 1 },
                      },
                    },
                  ],
                  as: "completedTrips",
                },
              },
              {
                $unwind: {
                  path: "$completedTrips",
                  preserveNullAndEmptyArrays: true,
                },
              },
            ],

            //total customer count
            TotalCustomerCount: [
              {
                $lookup: {
                  from: "cln_customers",
                  //   let: { fkCustomerId: "$_id" },
                  pipeline: [
                    {
                      $match: {
                        $expr: {
                          $and: [
                            { $eq: ["$strStatus", "N"] },
                            { $gte: ["$createdAt", new Date(strFromDate)] },
                            { $lte: ["$createdAt", new Date(strEndDate)] },
                          ],
                        },
                      },
                    },
                    {
                      $group: {
                        _id: null,
                        totalSellingPrice: { $sum: "$Total_Amount" },

                        totalProfitAmount: {
                          $sum: "$profit_Price",
                        },
                        totalCostAmount: {
                          $sum: "$cost_Price",
                        },
                        totalBalance: {
                          $sum: {
                            $subtract: ["$Total_Amount", "$Total_Paid_Amount"],
                          },
                        },
                        //new
                        totalPaidAmount: {
                          $sum: "$Total_Paid_Amount",
                        },
                        totalRefundAmount: {
                          $sum: "$Refund_Amount",
                        },
                        totalServiceCreditAmount: {
                          $sum: "$Service_Credit_Amount",
                        },
                        totalServiceDebitAmount: {
                          $sum: "$Service_Debit_Amount",
                        },
                        //end
                        count: { $sum: 1 },
                      },
                    },
                  ],
                  as: "TotalCustomerCount",
                },
              },
              {
                $unwind: {
                  path: "$TotalCustomerCount",
                  preserveNullAndEmptyArrays: true,
                },
              },
            ],
            compledGrossProfit: [
              {
                $lookup: {
                  from: "cln_customers",
                  pipeline: [
                    {
                      $addFields: {
                        totalBalance: {
                          $subtract: ["$Total_Amount", "$Total_Paid_Amount"],
                        },
                      },
                    },
                    {
                      $match: {
                        $expr: {
                          $and: [
                            { $eq: ["$strStatus", "N"] },
                            { $gte: ["$createdAt", new Date(strFromDate)] },
                            { $lte: ["$createdAt", new Date(strEndDate)] },
                            { $eq: ["$totalBalance", 0] }, // Match total balance zero customers
                          ],
                        },
                      },
                    },
                    {
                      $group: {
                        _id: null,

                        totalProfitAmount: {
                          $sum: "$profit_Price",
                        },
                      },
                    },
                  ],
                  as: "TotalCustomerCount",
                },
              },
              {
                $unwind: {
                  path: "$TotalCustomerCount",
                  preserveNullAndEmptyArrays: true,
                },
              },
            ],

            //total supplier count
            TotalSupplierCount: [
              {
                $lookup: {
                  from: "cln_suppliers",
                  //   let: { fkCustomerId: "$_id" },
                  pipeline: [
                    {
                      $match: {
                        $expr: {
                          $and: [
                            { $eq: ["$strStatus", "N"] },
                            { $gte: ["$createdAt", new Date(strFromDate)] },
                            { $lte: ["$createdAt", new Date(strEndDate)] },
                          ],
                        },
                      },
                    },
                    {
                      $group: {
                        _id: null,
                        // totalBalance: {
                        //   $sum: {
                        //     $subtract: ["$Amount", "$Total_Paid_Amount"],
                        //   },
                        // },

                        totalBalance: {
                          $sum: {
                            $max: [
                              {
                                $subtract: ["$Amount", "$Total_Paid_Amount"],
                              },
                              0,
                            ],
                          },
                        },
                        totalCostAmount: {
                          $sum: "$Amount",
                        },

                        count: { $sum: 1 },
                      },
                    },
                  ],
                  as: "TotalSupplierCount",
                },
              },
              {
                $unwind: {
                  path: "$TotalSupplierCount",
                  preserveNullAndEmptyArrays: true,
                },
              },
            ],
            //office expense credit
            TotalExpenseCreditAmount: [
              {
                $lookup: {
                  from: "cln_expenses",
                  //   let: { fkCustomerId: "$_id" },
                  pipeline: [
                    {
                      $match: {
                        // strStatus: "N",
                        tranfer_Type: "Credit",
                        // createdAt: {
                        //   $gte: new Date(strFromDate),
                        //   $lte: new Date(strEndDate),
                        // },
                        $expr: {
                          $and: [
                            { $eq: ["$strStatus", "N"] },

                            { $gte: ["$expense_Date", new Date(strFromDate)] },
                            { $lte: ["$expense_Date", new Date(strEndDate)] },
                          ],
                        },
                      },
                    },
                    {
                      $group: {
                        _id: null,
                        totalAmount: { $sum: "$Amount" },
                      },
                    },
                  ],
                  as: "TotalExpenseCreditAmount",
                },
              },
              {
                $unwind: {
                  path: "$TotalExpenseCreditAmount",
                  preserveNullAndEmptyArrays: true,
                },
              },
            ],
            //office debit amount
            TotalExpenseDebitAmount: [
              {
                $lookup: {
                  from: "cln_expenses",
                  pipeline: [
                    {
                      $match: {
                        // strStatus: "N",
                        tranfer_Type: "Debit",
                        // createdAt: {
                        //   $gte: new Date(strFromDate),
                        //   $lte: new Date(strEndDate),
                        // },
                        $expr: {
                          $and: [
                            { $eq: ["$strStatus", "N"] },

                            { $gte: ["$expense_Date", new Date(strFromDate)] },
                            { $lte: ["$expense_Date", new Date(strEndDate)] },
                          ],
                        },
                      },
                    },
                    {
                      $group: {
                        _id: null,
                        totalAmount: { $sum: "$Amount" },
                      },
                    },
                  ],
                  as: "TotalExpenseDebitAmount",
                },
              },
              {
                $unwind: {
                  path: "$TotalExpenseDebitAmount",
                  preserveNullAndEmptyArrays: true,
                },
              },
            ],
          },
        },
        {
          $project: {
            supplierPendingAmount: {
              $ifNull: [
                {
                  $arrayElemAt: [
                    "$TotalSupplierCount.TotalSupplierCount.totalBalance",
                    0,
                  ],
                },
                0,
              ],
            },
            SupplierPendingCount: {
              $ifNull: [{ $arrayElemAt: ["$pending.count", 0] }, 0],
            },
            SupplierGvPendingCreditAmount: {
              $ifNull: [
                {
                  $arrayElemAt: ["$pending.totalPendingServiceCreditAmount", 0],
                },
                0,
              ],
            },
            SupplierGvPendingDebitCount: {
              $ifNull: [
                {
                  $arrayElemAt: ["$pending.totalPendingServiceDebitAmount", 0],
                },
                0,
              ],
            },
            supplierVerifyCount: {
              $ifNull: [{ $arrayElemAt: ["$verify.count", 0] }, 0],
            },

            SupplierVerifyAmount: {
              $ifNull: [
                {
                  $arrayElemAt: [
                    "$SupplierOtherDetails.supplierVerifyCase.totalPaidAmount",
                    0,
                  ],
                },
                0,
              ],
            },

            SupplierRefundAmount: {
              $ifNull: [
                {
                  $arrayElemAt: [
                    "$SupplierOtherDetails.supplierVerifyCase.totalRefundAmount",
                    0,
                  ],
                },
                0,
              ],
            },

            SupplierGvCreditAmount: {
              $ifNull: [
                {
                  $arrayElemAt: [
                    "$SupplierOtherDetails.supplierVerifyCase.totalServiceCreditAmount",
                    0,
                  ],
                },
                0,
              ],
            },

            SupplierGvDebitAmount: {
              $ifNull: [
                {
                  $arrayElemAt: [
                    "$SupplierOtherDetails.supplierVerifyCase.totalServiceDebitAmount",
                    0,
                  ],
                },
                0,
              ],
            },
            //supplier total amount
            SupplierTotalAmount: {
              $ifNull: [
                {
                  $arrayElemAt: [
                    // "$TotalCustomerCount.TotalCustomerCount.totalCostAmount",
                    "$TotalSupplierCount.TotalSupplierCount.totalCostAmount",

                    0,
                  ],
                },
                0,
              ],
            },

            TotalSupplierCount: {
              $ifNull: [
                {
                  $arrayElemAt: [
                    "$TotalSupplierCount.TotalSupplierCount.count",
                    0,
                  ],
                },
                0,
              ],
            },
            customerPendingCount: {
              $ifNull: [
                {
                  $arrayElemAt: [
                    "$customerPending.customerPendingCase.count",
                    0,
                  ],
                },
                0,
              ],
            },
            customerVerifyCount: {
              $ifNull: [
                {
                  $arrayElemAt: ["$customerVerify.customerVerifyCase.count", 0],
                },
                0,
              ],
            },
            customerGvCreditPendingAmount: {
              $ifNull: [
                {
                  $arrayElemAt: [
                    "$customerPending.customerPendingCase.totalServiceCreditAmount",
                    0,
                  ],
                },
                0,
              ],
            },
            customerGvDebitPendingAmount: {
              $ifNull: [
                {
                  $arrayElemAt: [
                    "$customerPending.customerPendingCase.totalServiceDebitAmount",
                    0,
                  ],
                },
                0,
              ],
            },

            customerPendingAmount: {
              $ifNull: [
                {
                  $arrayElemAt: [
                    "$TotalCustomerCount.TotalCustomerCount.totalBalance",
                    0,
                  ],
                },
                0,
              ],
            },
            //sellin price total customer
            customerTotalAmount: {
              $ifNull: [
                {
                  $arrayElemAt: [
                    "$TotalCustomerCount.TotalCustomerCount.totalSellingPrice",
                    0,
                  ],
                },
                0,
              ],
            },
            //end

            customerVerifedAmount: {
              $ifNull: [
                {
                  $arrayElemAt: [
                    "$customerOtherDetails.customerVerifyCase.totalPaidAmount",
                    0,
                  ],
                },
                0,
              ],
            },

            customerRefundAmount: {
              $ifNull: [
                {
                  $arrayElemAt: [
                    "$customerOtherDetails.customerVerifyCase.totalRefundAmount",
                    0,
                  ],
                },
                0,
              ],
            },

            customerGvCreditAmount: {
              $ifNull: [
                {
                  $arrayElemAt: [
                    "$customerOtherDetails.customerVerifyCase.totalServiceCreditAmount",
                    0,
                  ],
                },
                0,
              ],
            },

            customerGvDebitAmount: {
              $ifNull: [
                {
                  $arrayElemAt: [
                    "$customerOtherDetails.customerVerifyCase.totalServiceDebitAmount",
                    0,
                  ],
                },
                0,
              ],
            },
            //---->
            completedTripCount: {
              $ifNull: [
                {
                  $arrayElemAt: ["$completedTrips.completedTrips.count", 0],
                },
                0,
              ],
            },
            ongoingTripCount: {
              $ifNull: [
                {
                  $arrayElemAt: ["$onGoingTrips.onGoingTrips.count", 0],
                },
                0,
              ],
            },
            TotalCustomerCount: {
              $ifNull: [
                {
                  $arrayElemAt: [
                    "$TotalCustomerCount.TotalCustomerCount.count",
                    0,
                  ],
                },
                0,
              ],
            },
            TotalProfitAmount: {
              $ifNull: [
                {
                  $arrayElemAt: [
                    "$TotalCustomerCount.TotalCustomerCount.totalProfitAmount",
                    0,
                  ],
                },
                0,
              ],
            },

            TotalCostAmount: {
              $ifNull: [
                {
                  $arrayElemAt: [
                    "$TotalSupplierCount.TotalSupplierCount.totalCostAmount",
                    0,
                  ],
                },
                0,
              ],
            },

            TotalExpenseCreditAmount: {
              $ifNull: [
                {
                  $arrayElemAt: [
                    "$TotalExpenseCreditAmount.TotalExpenseCreditAmount.totalAmount",
                    0,
                  ],
                },
                0,
              ],
            },
            TotalExpenseDebitAmount: {
              $ifNull: [
                {
                  $arrayElemAt: [
                    "$TotalExpenseDebitAmount.TotalExpenseDebitAmount.totalAmount",
                    0,
                  ],
                },
                0,
              ],
            },
          },
        },
      ]);

      const profitTotal = await customer.aggregate([
        {
          $match: {
            strStatus: "N",
            $expr: {
              $and: [
                { $eq: ["$strStatus", "N"] },
                { $gte: ["$createdAt", new Date(strFromDate)] },
                { $lte: ["$createdAt", new Date(strEndDate)] },
              ],
            },
          },
        },

        {
          $lookup: {
            from: "cln_suppliers",
            localField: "fkSupplierId",
            foreignField: "fkSupplierId",
            as: "supplier_payment_info",
          },
        },
        {
          $unwind: "$supplier_payment_info",
        },
        //new
        {
          $match: {
            "supplier_payment_info.strStatus": "N",
          },
        },
        //end
        //new updates

        {
          $addFields: {
            customerBalence: {
              $subtract: ["$Total_Amount", "$Total_Paid_Amount"],
            },
            supplierBalence: {
              $subtract: [
                "$supplier_payment_info.Amount",
                "$supplier_payment_info.Total_Paid_Amount",
              ],
            },
          },
        },
        //new updates

        {
          $match: {
            customerBalence: 0,
            supplierBalence: 0,
          },
        },

        {
          $group: {
            _id: null,
            totalProfitAmount: {
              $sum: "$profit_Price",
            },
          },
        },
      ]);

      if (profitTotal.length > 0) {
        suppDetails[0].profitTotal = profitTotal[0].totalProfitAmount || 0;
      }

      const report = await customer.aggregate([
        {
          $match: {
            strStatus: "N",
            $expr: {
              $and: [
                { $eq: ["$strStatus", "N"] },
                { $gte: ["$createdAt", new Date(strFromDate)] },
                { $lte: ["$createdAt", new Date(strEndDate)] },
              ],
            },
          },
        },

        {
          $lookup: {
            from: "cln_suppliers",
            localField: "fkSupplierId",
            foreignField: "fkSupplierId",
            as: "supplier_payment_info",
          },
        },
        {
          $unwind: "$supplier_payment_info",
        },

        {
          $group: {
            _id: null,

            // recivableTotalAmount: {
            //   $sum: {
            //     $subtract: [
            //       "$customer_payment_info.Total_Amount",
            //       "$customer_payment_info.Total_Paid_Amount",
            //     ],
            //   },
            // },

            recivableTotalAmount: {
              $sum: "$Total_Paid_Amount",
              // $max: [
              //   {
              //     $subtract: ["$Total_Amount", "$Total_Paid_Amount"],
              //   },
              //   0,
              // ],
            },
            paybleTotalAmount: {
              $sum: "$supplier_payment_info.Total_Paid_Amount",
              // {
              //   $max: [
              //     {
              //       $subtract: [
              //         "$supplier_payment_info.Amount",
              //         "$supplier_payment_info.Total_Paid_Amount",
              //       ],
              //     },
              //     0,
              //   ],
              // },
            },

            // paybleTotalAmount: {
            //   $sum: {
            //     $subtract: [
            //       "$supplier_payment_info.Total_Amount",
            //       "$supplier_payment_info.Total_Paid_Amount",
            //     ],
            //   },
            // },
            profitTotal: {
              $sum: {
                $subtract: ["$Total_Amount", "$supplier_payment_info.Amount"],
              },
            },
          },
        },
      ]);

      let tabyReport = await payment.aggregate([
        {
          $unwind: "$payment_Details",
        },
        {
          $match: {
            $expr: {
              $and: [
                { $eq: ["$strStatus", "N"] },
                { $gte: ["$verifyDate", new Date(strFromDate)] },
                { $lte: ["$verifyDate", new Date(strEndDate)] },
              ],
            },
            strStatus: "N",
            "payment_Details.transferPercent": 1,
            "payment_Details.transferMode": "Tabby",
            "payment_Details.paymentStatus": "VERIFY",
          },
        },
        {
          $unwind: "$payment_Details",
        },
        {
          $addFields: {
            "payment_Details.calculatedAmount": {
              $subtract: [
                "$payment_Details.amount",
                {
                  $multiply: [
                    "$payment_Details.amount",
                    { $divide: ["$payment_Details.transferPercentage", 100] },
                  ],
                },
              ],
            },
          },
        },
        {
          $addFields: {
            "payment_Details.diffrenceAmount": {
              $subtract: [
                "$payment_Details.amount",
                "$payment_Details.calculatedAmount",
              ],
            },
          },
        },
        {
          $group: {
            _id: null,

            totalDiffrenceAmount: {
              $sum: "$payment_Details.diffrenceAmount",
            },
          },
        },

        {
          $project: {
            _id: 0,
            totalDiffrenceAmount: 1,
          },
        },
      ]);

      let creditReport = await payment.aggregate([
        {
          $unwind: "$payment_Details",
        },
        {
          $match: {
            $expr: {
              $and: [
                { $eq: ["$strStatus", "N"] },
                { $gte: ["$verifyDate", new Date(strFromDate)] },
                { $lte: ["$verifyDate", new Date(strEndDate)] },
              ],
            },
            strStatus: "N",
            "payment_Details.transferPercent": 1,
            "payment_Details.transferMode": "Credit Card",
            "payment_Details.paymentStatus": "VERIFY",
          },
        },
        {
          $unwind: "$payment_Details",
        },
        {
          $addFields: {
            "payment_Details.calculatedAmount": {
              $subtract: [
                "$payment_Details.amount",
                {
                  $multiply: [
                    "$payment_Details.amount",
                    { $divide: ["$payment_Details.transferPercentage", 100] },
                  ],
                },
              ],
            },
          },
        },
        {
          $addFields: {
            "payment_Details.diffrenceAmount": {
              $subtract: [
                "$payment_Details.amount",
                "$payment_Details.calculatedAmount",
              ],
            },
          },
        },
        {
          $group: {
            _id: null,

            totalDiffrenceAmount: {
              $sum: "$payment_Details.diffrenceAmount",
            },
          },
        },

        {
          $project: {
            _id: 0,
            totalDiffrenceAmount: 1,
          },
        },
      ]);
      if (report.length > 0) {
        suppDetails[0].recivableTotalAmount =
          report[0].recivableTotalAmount || 0;
        suppDetails[0].paybleTotalAmount = report[0].paybleTotalAmount || 0;
      }
      if (tabyReport.length > 0) {
        // suppDetails[0].tabyTotalAmount = Math.round(tabyReport[0].totalDiffrenceAmount || 0*100)/100
        suppDetails[0].tabyTotalAmount = parseFloat( tabyReport[0].totalDiffrenceAmount.toFixed(2));
          
      }
      if (creditReport.length > 0) {
        suppDetails[0].CredTotalAmount =
          creditReport[0].totalDiffrenceAmount || 0;
      }

      if (suppDetails.length) {
        return {
          success: true,
          message: "Response retrieved successfully",
          data: suppDetails,
        };
      } else {
        return {
          success: false,
          message: "No documents",
          data: [],
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
};
