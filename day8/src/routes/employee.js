const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employee');

// retrieve all employee list
router.get('/', employeeController.getEmployeeList);

// get employee by id
router.get('/:id', employeeController.getEmployeeByID)

// create employee
router.post('/', employeeController.createEmployee);

// updated employee by id
router.put('/:id', employeeController.updateEmployee)

// delete employee
router.delete('/:id', employeeController.deleteEmployee)

module.exports = router;