// services/AuthService.js
const db = require('../config/db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

class AuthService {
  async registerUser(username, email, password) {
    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = `
      INSERT INTO users (username, email, password)
      VALUES (?, ?, ?)
    `;
    const values = [username, email, hashedPassword];
    try {
      const [result] = await db.query(query, values);
      return result.insertId; // Return the ID of the newly registered user
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
  }

  async loginUser(email, password) {
    const query = `
      SELECT * FROM users WHERE email = ?
    `;
    try {
      const [result] = await db.query(query, [email]);
      const user = result[0];
      if (!user) {
        throw new Error('User not found');
      }
      // Verify the password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        throw new Error('Invalid password');
      }
      // Generate JWT token
      const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
      return { userId: user.id, token };
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  }

  // Add more authentication-related methods as needed
}

module.exports = new AuthService();
