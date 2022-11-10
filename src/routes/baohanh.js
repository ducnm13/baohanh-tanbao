const express = require("express");
const router = express.Router();

const BHController = require("../app/controllers/BHController");

router.get("/:slug", BHController.show);
router.get("/", BHController.index);

module.exports = router;
