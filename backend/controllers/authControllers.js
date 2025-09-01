const userModel = require("../models/userModel");

//  localhost:4000/api/v1/auth/signup
const signupController = async (req, res) => {
  let { username, email, password, phone } = req.body;
  //   res.send( email)
  try {
    const user = new userModel({
      username,
      email,
      password,
      phone,
    });
    await user.save();
    return res
      .status(201)
      .json({ msg: "User signup success", success: true,  user });
  } catch (error) {
    return res
      .status(500)
      .json({
        error: error.message ? error.message : somethingWentWrong,
        success: false,
      });
  }
};
//  localhost:4000/api/v1/auth/login
const loginController = (req, res) => {
  res.send("User login");
};

module.exports = {
  signupController,
  loginController,
};
