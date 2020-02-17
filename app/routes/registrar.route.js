const express = require('express');
const router = express.Router();

const registrarController = require('../controllers/registrar.controller');

// Routes under /registrar module.
router.post('/', registrarController.createOffer);

module.exports = router;
