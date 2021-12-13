const employeeModel = require('../models/employee');

exports.getEmployeeList = (req,res) => {
    employeeModel.getAllEmployees((err,employees) => {
        if(err) return res.status(400).json(err);
        else    return res.status(200).json({success: true, data: employees});
    })
}

// get  employee by id
exports.getEmployeeByID = (req,res) => {
    employeeModel.getEmployeeByID( req.params.id ,(err,employees) => {
        if(err) return res.status(400).json(err);
        else    return res.status(200).json({success: true, data: employees});
    })
}

// create new employees
exports.createEmployee = (req,res) => {
    const employee = new employeeModel(req.body); 
    if(req.body.contructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).json({success: false, message: 'Please fill all details'});
    } else {
        employeeModel.createEmployee(employee, (err, employee) => {
            if(err) return res.status(400).json({success: false, message: 'something went wrong'});
            else    return res.status(200).json({success: true, data: {id: employee.insertId}, message: 'Employee created successfully'});
        })
    }
}

// update employee
exports.updateEmployee = (req,res) => {
    const employee = new employeeModel(req.body); 
    if(req.body.contructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).json({success: false, message: 'Please fill all details'});
    } else {
        employeeModel.updateEmployee(req.params.id, employee, (err, employee) => {
            if(err) return res.status(400).json({success: false, message: 'something went wrong'});
            else    return res.status(200).json({success: true, message: 'Employee updated successfully'});
        })
    }
}

// delete an employee
exports.deleteEmployee = (req,res) => {
    employeeModel.deleteEmployee( req.params.id ,(err,employees) => {
        if(err) return res.status(400).json({success: false, message: err});
        else    return res.status(200).json({success: true, message: 'Employee deleted successfully'});
    })
}