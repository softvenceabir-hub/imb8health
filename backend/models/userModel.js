const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Username is required'],
      min: [3, 'Username must be at least 3 characters long'],
      max: [40, 'Username must be at most 40 characters long'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: [true, 'Email must be unique'],
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      min: [6, 'Password must be at least 6 characters long'],
      max: [25, 'Password must be at most 25 characters long'],
      trim: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    phone: {
      type: String,
      unique: [true, 'Phone number must be unique'],
      trim: true,
    },
    profilePicture: {
      type: String,
      default: 'default.jpg',
    },
    address: {
      type: String,

    },
    otp: {
      type: String,
    },
    isVerify: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", userSchema);
