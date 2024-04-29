// controllers/AuthController.js
const AuthService = require('../Services/User.service');
const jwt = require('jsonwebtoken');

class AuthController {
  async registerUser(req, res) {
    const { username, email, password } = req.body;
    try {
      // Call the service to register the user
      const userId = await AuthService.registerUser(username, email, password);
      res.status(201).json({ message: 'User registered successfully', userId });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async loginUser(req, res) {
    const { email, password } = req.body;
    try {
      // Call the service to authenticate the user
      const { userId, token } = await AuthService.loginUser(email, password);
      res.status(200).json({ userId, token });
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(401).json({ message: 'Invalid credentials' });
    }
  }

  // Add more authentication-related controller methods as needed
}

module.exports = new AuthController();
