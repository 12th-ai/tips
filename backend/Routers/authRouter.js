const express = require('express');
const router = express.Router();
const authController = require('../Controllers/Auth.Controller'); // Corrected file path

// Routes for authentication
router.post('/register', authController.register); // Using authController.register instead of authController.register
router.post('/login', authController.login); // Using authController.login instead of authController.login

module.exports = router;
