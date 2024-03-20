const express = require("express");
const EmployeeRoutes = express.Router();

const EmployeeControllers = require("../controllers/Employee/EmployeeControllers");

//Define Route to create an employee record.
EmployeeRoutes.post(
    "/EmployeeCreate",
    EmployeeControllers.EmployeeCreate);

//Employee List
EmployeeRoutes.get(
    "/EmployeeList/:DepartmentId",
    EmployeeControllers.EmployeeList,
  );
module.exports = EmployeeRoutes;
