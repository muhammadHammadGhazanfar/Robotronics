const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Contact form schema (if you want to store messages in MongoDB)
const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    schoolName: {
        type: String
    },
    address: {
        type: String
    },
    message: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Contact = mongoose.model("Contact", ContactSchema);

// API to handle form submission
router.post("/contact", async (req, res) => {
    const { name, phone, email, schoolName, address, message } = req.body;

    // Simple validation
    if (!name || !phone || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        // If you want to save to MongoDB
        const newContact = new Contact({ name, phone, email, schoolName, address, message });
        await newContact.save();

        res.status(200).json({ success: true, message: "Message received!" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error" });
    }
});

module.exports = router;
