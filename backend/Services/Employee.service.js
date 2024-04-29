// services/EmployeeService.js
const db = require('../config/database');

class EmployeeService {
  async createEmployee(firstName, lastName, position) {
    const query = `
      INSERT INTO employees (firstName, lastName, position)
      VALUES (?, ?, ?)
    `;
    const values = [firstName, lastName, position];
    try {
      const [result] = await db.query(query, values);
      return result.insertId; // Return the ID of the newly created employee
    } catch (error) {
      console.error('Error creating employee:', error);
      throw error;
    }
  }

  async getAllEmployees() {
    const query = `
      SELECT * FROM employees
    `;
    try {
      const [result] = await db.query(query);
      return result; // Return all employees
    } catch (error) {
      console.error('Error fetching employees:', error);
      throw error;
    }
  }

  // Add more methods as needed
}

module.exports = new EmployeeService();
