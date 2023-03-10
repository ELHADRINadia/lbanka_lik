const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },

    role: {
      type : String, 
      enum :  ["admin", "user"],
      default : "user",
    },
    
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", userSchema);
