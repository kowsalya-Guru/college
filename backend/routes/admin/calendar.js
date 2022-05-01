const express = require("express");
const router = express.Router();
const adminController = require("../../controllers/admin");

router.post("/", adminController.addCalendarDetails);
router.get("/", adminController.getCalendarDetails);
router.put("/:id", adminController.updateCalendarById);
router.delete("/:id", adminController.deleteCalendarById);

module.exports = router;