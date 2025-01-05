const Contact = require('./../../models/Contact');  // Adjust the path as needed

// Controller function to get all contacts
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find(); // Retrieve all contacts from the DB
    res.status(200).json(contacts); // Return contacts as JSON
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({ message: 'Error fetching contacts', error: error.message });
  }
};

module.exports = { getContacts };
