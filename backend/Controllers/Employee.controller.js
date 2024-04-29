const db = require('../models');

// Function to retrieve all employees
const getAllEmployees = async (req, res) => {
  try {
    const employees = await db.Employee.findAll();
    return res.status(200).json(employees);
  } catch (error) {
    console.error('Error retrieving employees:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// Function to create a new employee
const createEmployee = async (req, res) => {
  try {
    const { name, email, department } = req.body;
    const newEmployee = await db.Employee.create({ name, email, department });
    return res.status(201).json(newEmployee);
  } catch (error) {
    console.error('Error creating employee:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// Function to update an existing employee
const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, department } = req.body;
    const employee = await db.Employee.findByPk(id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    await employee.update({ name, email, department });
    return res.status(200).json(employee);
  } catch (error) {
    console.error('Error updating employee:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// Function to delete an employee
const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await db.Employee.findByPk(id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    await employee.destroy();
    return res.status(204).json({ message: 'Employee deleted successfully' });
  } catch (error) {
    console.error('Error deleting employee:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { getAllEmployees, createEmployee, updateEmployee, deleteEmployee };
