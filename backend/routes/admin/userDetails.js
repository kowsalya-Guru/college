const express = require("express");
const router = express.Router();
const adminController = require("../../controllers/admin");

router.post("/", adminController.addUserDetails);
router.get("/", adminController.getUserDetails);
router.put("/:id", adminController.updateUserById);
router.delete("/:id", adminController.deleteUserById);

module.exports = router;