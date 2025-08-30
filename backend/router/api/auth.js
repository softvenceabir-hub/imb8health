const express=require('express')
const router=express.Router()
// localhost:4000/api/v1/auth/signup


router.post('/signup', (req, res) => {
  res.send('User signup')
})

module.exports=router
