const express = require("express");
const EmployeeRoutes = express.Router();

const EmployeeControllers = require("../controllers/Employee/EmployeeControllers");

//Define Route to create an employee record.
EmployeeRoutes.post("/EmployeeCreate",EmployeeControllers.EmployeeCreate);
module.exports = EmployeeRoutes;
