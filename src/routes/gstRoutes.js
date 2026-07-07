    const express = require("express");
    const router = express.Router();

    const verifyToken = require("../middleware/verifyToken");
    const gstController = require("../controllers/gstController");

    router.get(
        "/upcoming-deadlines",
        verifyToken,
        gstController.getUpcomingDeadlines
    );

    module.exports = router;