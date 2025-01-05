const express = require("express");
const { saveContact } = require("./../../controllers/shop/contact");

const router = express.Router();

// POST route for saving contact
router.post("/shop/contact", saveContact);

module.exports = router;
