const express=require('express')
const router=express.Router()
// localhost:4000/api/v1
const api=require('./api')
router.use("/api/v1", api)

module.exports=router
