const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customer.controller');

// Routes under /customer module.
router.get('/', customerController.findAll);

module.exports = router;
