const Contact = require("../models/contactModel");

// @desc    Create a new contact message
// @route   POST /api/contact
// @access  Public
const createContact = async (req, res) => {
  const { name, phone, email, schoolName, address, message } = req.body;

  // Simple validation
  if (!name || !phone || !email || !message) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  try {
    // Create a new contact record in the database
    const newContact = new Contact({
      name,
      phone,
      email,
      schoolName,
      address,
      message,
    });

    await newContact.save();

    res.status(201).json({
      success: true,
      message: "Message received!",
      data: newContact,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = {
  createContact,
};
