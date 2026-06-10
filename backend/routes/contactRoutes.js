const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    const { name, age, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
        return res.status(400).json({ message: "All fields are required" });
    }

    console.log("New contact message received:", { name, age, email, phone, message });

    res.json({ message: "Message received successfully! We will contact you soon." });
});

module.exports = router;
