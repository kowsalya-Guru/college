const express = require("express");
const router = express.Router();

const UserController = require("../../controllers/user");
const user = require("../../models/user");


router.post("/login", UserController.studentuserLogin);
router.get("/login", UserController.studentuserLogout);
router.post("/register",UserController.studentuserCreate);

module.exports = router;


