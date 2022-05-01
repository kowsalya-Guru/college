const express = require("express");
const router = express.Router();

const adminRoutes = require("./adminUser");
const studentRoutes = require("./studentUser");
const staffRoutes = require("./staffUser");

// const outwardRoutes = require("./outward");

router.use("/admin", adminRoutes);
router.use("/student", studentRoutes);
router.use("/staff", staffRoutes);

// router.use("/outward", outwardRoutes);

module.exports = router; 