const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 4040
// api routes
//localhost:4000
const router=require('./router')
const connectDB = require('./config/db')
connectDB()
app.use(express.json())
app.use(router)
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
