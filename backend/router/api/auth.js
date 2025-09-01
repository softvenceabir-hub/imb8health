const express=require('express')
const { signupController,loginController } = require('../../controllers/authControllers')
const router=express.Router()
// localhost:4000/api/v1/auth/signup

// signup
router.post('/signup',signupController)
// login
router.post('/login', loginController)

module.exports=router
