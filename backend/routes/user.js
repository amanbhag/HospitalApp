const express = require("express");
const { createUser, createBill, sendPatients } = require("../controller/user");

const router = express.Router();

router.post("/user", createUser);
router.post("/bill", createBill);
router.get("/patients", sendPatients);

module.exports = router;
