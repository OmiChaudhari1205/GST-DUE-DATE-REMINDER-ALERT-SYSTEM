const express = require("express");
require("dotenv").config();

const app = express();

// Routes
const gstRoutes = require("./routes/gstRoutes");
const settingsRoutes = require("./routes/settingsRoutes");

// Middleware
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
    res.send("GST Reminder Backend Running");
});

// API Routes
app.use("/api/gst", gstRoutes);
app.use("/api/settings", settingsRoutes);

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});