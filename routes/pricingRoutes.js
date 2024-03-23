
const express = require('express');
const router = express.Router(); // Make sure to create a router instance

const pricingController = require('../controllers/pricingController');

// Define routes using the router instance
router.post('/checkPrice', pricingController.checkPrice);

module.exports = router;
