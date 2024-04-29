// utils/formValidator.js

class FormValidator {
    static validateLoginForm(email, password) {
      const errors = {};
  
      if (!email) {
        errors.email = 'Email is required';
      } else if (!this.isValidEmail(email)) {
        errors.email = 'Invalid email format';
      }
  
      if (!password) {
        errors.password = 'Password is required';
      }
  
      return errors;
    }
  
    static isValidEmail(email) {
      // Simple email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  }
  
  module.exports = FormValidator;
  