const express = require("express");
const router = express.Router();

const UserController = require("../../controllers/user");
// const user = require("../../models/user");

router.post("/login", UserController.adminuserLogin);
router.get("/login", UserController.adminuserLogout);
router.post("/register",UserController.adminuserCreate);
// router.get("/",UserController.readLogin);
// router.get("/register",UserController.readRegister);

module.exports = router;


