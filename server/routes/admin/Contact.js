const express = require('express');
const path = require('path');
const { getContacts } = require(path.join(__dirname, '../../controllers/admin/contact'));
const router = express.Router();

// Route to fetch all contacts
router.get('/admin/contacts', getContacts);

module.exports = router;
