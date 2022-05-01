const express = require("express");
const router = express.Router();

const UserController = require("../../controllers/user");
const user = require("../../models/user");

router.post("/login", UserController.staffuserLogin);
router.get("/login", UserController.staffuserLogout);
router.post("/register",UserController.staffuserCreate);

module.exports = router;


