const express = require('express');
const { getContacts } = require('./../../controllers/admin/Contact');  // Adjust the path as needed
const router = express.Router();

// Route to fetch all contacts
router.get('/admin/contacts', getContacts);

module.exports = router; 
