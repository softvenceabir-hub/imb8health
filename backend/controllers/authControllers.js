const emailValidation = require("../helpers/emailValidation");
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");


const signupController = async (req, res) => {
    const { username, email, password, phone } = req.body;
 try {
     bcrypt.hash(password, 10, async function(err, hash) {
        if (err) {
          return res.status(500).json({ success: false, error: err.message||"something went wrong" });
        }
   else {
//    console.log( emailValidation(email));
    if(!emailValidation(email)){
        return res.status(400).json({success: false,message: "Invalid email format" });
        }
         let user = new userModel({
        username,
        email,
        password: hash,
        phone
     })
     await user.save();
     return res.status(201).json({ success: true,message: "User created successfully", data: user });
     }
    })
   
 } catch (error) {
    return res.status(500).json({success: false,error: error.message || "something Wrong" });
 }
}
const loginController = async (req, res) => {
    const { email, password } = req.body;
}
module.exports = {
  signupController,
  loginController
}