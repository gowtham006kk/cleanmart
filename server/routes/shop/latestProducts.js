// routes/productRoutes.js
const express = require("express");
const router = express.Router();
const { getLatestProducts } = require("./../../controllers/shop/latestProducts")

// Route to fetch the latest products
router.get("/shop/latest/", getLatestProducts)

module.exports = router;
