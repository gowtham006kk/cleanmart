const Contact = require("./../../models/Contact");
const { validationResult } = require('express-validator'); // Assuming you use express-validator for validation

// Save a new contact
const saveContact = async (req, res) => {
  const { name, email, message } = req.body;

  // Validate inputs (this can be adjusted based on your validation rules)
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: errors.array(),
    });
  }

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  try {
    const newContact = new Contact({ name, email, message });

    // Save the new contact to the database
    await newContact.save();

    // Send a success response
    res.status(201).json({
      success: true,
      message: "Contact saved successfully",
      contact: newContact, // Optional: Return the saved contact data
    });
  } catch (error) {
    console.error("Error saving contact:", error); // Log the error for debugging

    // Send a failure response
    res.status(500).json({
      success: false,
      message: "Error saving contact",
      error: error.message || "Unknown error",
    });
  }
};

module.exports = { saveContact };
