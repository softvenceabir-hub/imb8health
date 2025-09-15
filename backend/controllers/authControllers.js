const emailValidation = require("../helpers/emailValidation");
const RandomOTP = require("../helpers/random_otp");
const { sendEmail } = require("../helpers/sendEmail");
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");


const signupController = async (req, res) => {
    const { username, email, password } = req.body;
 try {
        const otp = RandomOTP();
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
        otp
     })
     await user.save();
     sendEmail(email, otp);
   //   setTimeout(async () => {
   //    await userModel.findOneAndUpdate({email},{otp: null}).then(()=>{
   //       console.log("otp deleted");
   //    })
   //    user.save();
   //   }, 2*60*1000); 

   //   console.log("otp deleted");
     return res.status(201).json({ success: true,message: "User created successfully", data: user });
     }
    })
   } catch (error) {
    return res.status(500).json({success: false,error: error.message || "something Wrong" });
 }
}
const loginController = async (req, res) => {

}
module.exports = {
  signupController,
  loginController
}