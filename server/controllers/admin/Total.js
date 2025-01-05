// controllers/dashboardController.js

const User = require('../../models/User');
const Product = require('../../models/Product');
const Order = require('../../models/Order');

const getTotalData = async (req, res) => {
  try {
    // Count the number of users, products, and orders
    const usersCount = await User.countDocuments();
    const productsCount = await Product.countDocuments();
    const ordersCount = await Order.countDocuments();

    res.json({
      usersCount,
      productsCount,
      ordersCount,
    });
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    res.status(500).json({ message: 'Error fetching data' });
  }
};

module.exports = { getTotalData };
