const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    account_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Account",
    },
    transaction_date: {
      type: Date,
      timestamp: true,
    },
    transaction_amount: {
      type: Number,
    },
    transaction_type: {
      type: String,
      enum: ["Retrait", "transfer"],
      required: true,
    },
    transfer_from: {
      type: String,
    },
    transfer_to: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Account",
    },
    solde: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("transactions", transactionSchema);
