const mongoose = require("mongoose");

// Define the LatestProduct schema
const latestProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: String, required: true },
    imageUrl: { type: String, required: true },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Create and export the LatestProduct model
const LatestProduct = mongoose.model("LatestProduct", latestProductSchema);

module.exports = LatestProduct;
