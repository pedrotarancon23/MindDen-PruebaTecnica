const express = require('express');
const router = express.Router();

const supervisorController = require('../controllers/supervisor.controller');

// Routes under /supervisor module.
router.get('/', supervisorController.findAll);

module.exports = router;
