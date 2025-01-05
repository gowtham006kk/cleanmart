// controllers/productController.js
const Product = require("./../../models/latestProducts")

// Fetch the latest products
const getLatestProducts = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 8; // Default to 8 if no limit is provided
    const products = await Product.find()
      .sort({ createdAt: -1 }) // Sort by newest first
      .limit(limit);

    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Failed to fetch products" });
  }
};

module.exports = { getLatestProducts };
