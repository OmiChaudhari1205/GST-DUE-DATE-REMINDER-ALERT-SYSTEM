const express = require("express");

const router = express.Router();

const verifyToken = require("../middleware/verifyToken");
const settingsController = require("../controllers/settingsController");

router.post(
    "/gst-profile",
    verifyToken,
    settingsController.createGSTProfile
);

module.exports = router;