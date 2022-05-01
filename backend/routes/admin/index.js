const express = require("express");
const router = express.Router();


const userRoutes = require("./userDetails");
const calendarRoutes = require("./calendar");
// const uploadRoutes = require("./upload");

router.use("/userDetails", userRoutes);
router.use("/calendar", calendarRoutes);
// router.use("/upload", uploadRoutes);





module.exports = router; 