const dbConnection = require('../../config/db.config')

var Employee = function (employee){
    this.first_name     =   employee.first_name;
    this.last_name      =   employee.last_name;
    this.email          =   employee.email;
    this.phone          =   employee.phone;
    this.organization   =   employee.organization;
    this.designation    =   employee.designation;
    this.salary         =   employee.salary;
    this.status         =   employee.status ? employee.status : 1;
    this.created_at     =   new Date();
    this.updated_at     =   new Date();
}

// get all employees
Employee.getAllEmployees = (result) => {
    dbConnection.query('SELECT * FROM employees WHERE is_deleted = 0', (err,res) => {
        if(err) {
            console.log('Errors while fetching employees', err);
            result(null,err);
        } else {
            // console.log('Employees fetched successfully');
            result(null,res);
        }
    })
}

// get  employee by id
Employee.getEmployeeByID = (id, result) => {
    dbConnection.query('SELECT * FROM employees WHERE id = ?', id ,(err,res) => {
        if(err) {
            console.log(`Errors while fetching employee with id ${id}`, err);
            result(null,err);
        } else {
            // console.log('Employees fetched successfully');
            result(null,res);
        }
    })
}

Employee.createEmployee = (data, result) => {
    dbConnection.query('INSERT INTO employees SET ?', data ,(err,res) => {
        if(err) {
            console.log(`Errors while creating employee`, err);
            result(null,err);
        } else {
            // console.log('Employees fetched successfully');
            result(null,res);
        }
    })
}

Employee.updateEmployee = (id, employeeReqData, result) => {
    dbConnection.query("UPDATE employees SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", 
        [employeeReqData.first_name,employeeReqData.last_name,employeeReqData.email,employeeReqData.phone,employeeReqData.organization,employeeReqData.designation,employeeReqData.salary, id], (err, res) => {
        if(err){
            console.log('Error while updating the employee');
            result(null, err);
        }else{
            console.log("Employee updated successfully");
            result(null, res);
        }
    });
}

Employee.deleteEmployee = (id, result) => {
    // hard delete
    // dbConnection.query('DELETE FROM employees WHERE id = ?', id ,(err,res) => {
    //     if(err) {
    //         console.log(`Errors while deleting employee with id ${id}`, err);
    //         result(null,err);
    //     } else {
    //         // console.log('Employees fetched successfully');
    //         result(null,res);
    //     }
    // })

    // soft delete
    dbConnection.query("UPDATE employees SET is_deleted = ? WHERE id = ?", 
    [1, id],(err,res) => {
        if(err) {
            console.log(`Errors while deleting employee with id ${id}`, err);
            result(null,err);
        } else {
            // console.log('Employees fetched successfully');
            result(null,res);
        }
    })
}

module.exports = Employee;