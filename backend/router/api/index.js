const express = require("express");
const router = express.Router();
// localhost:4000/api/v1
const authRouter = require("./auth");
router.use("/auth", authRouter);
// page not found
router.use((req, res) => {
  return res.status(404).json({ success: false, message: "page not found" });
});

module.exports = router;
