// routes/dashboardRoutes.js

const express = require('express');
const router = express.Router();
const { getTotalData } = require('../../controllers/admin/Total');

router.get('/admin/total', getTotalData);

module.exports = router;
