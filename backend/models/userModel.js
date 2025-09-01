const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      minlength: [3, "Username must be at least 3 characters long"],
      maxlength: [40, "Username must be at most 40 characters long"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Email must be unique"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters long"],
      // maxlength: [25, "Password must be at most 25 characters long"],
      trim: true,
    },
    profilePicture: {
      type: String,
      default: "default.jpg",
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    country: {
      type: String,
    },
    phone: {
      type: String,
      unique: [true, "Phone number must be unique"],
      trim: true,
      minlength: [11, "Phone number must be at least 11 characters long"],
    
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    // otp: {
    //   type: String,
    // },
    // isVerify: {
    //   type: Boolean,
    //   default: false,
    // },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", userSchema);
