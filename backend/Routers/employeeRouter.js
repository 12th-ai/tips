// routers/employeeRouter.js

const express = require('express');
const router = express.Router();
const employeeController = require('../Controllers/Employee.controller');

// Routes for employee management
router.get('/', employeeController.getAllEmployees);
router.get('/:id', employeeController.getEmployeeById);
router.post('/', employeeController.createEmployee);
router.put('/:id', employeeController.updateEmployee);
router.delete('/:id', employeeController.deleteEmployee);

module.exports = router;
