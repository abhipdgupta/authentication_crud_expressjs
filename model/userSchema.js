const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    user_role:{
      type:String,
      enum:["USER","ADMIN"],
      default:"USER"
    }
  },
  { timestamps: true }
);


const User = mongoose.model("user", userSchema);


module.exports = User
