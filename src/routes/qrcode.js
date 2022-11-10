const express = require("express");
const router = express.Router();

const QRController = require("../app/controllers/QRController");

router.post("/store", QRController.store);
router.get("/", QRController.index);

module.exports = router;
