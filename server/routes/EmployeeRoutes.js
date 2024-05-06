const express = require("express");
const EmployeeRoutes = express.Router();

const EmployeeControllers = require("../controllers/Employee/EmployeeControllers");
const CheckAuthLogin = require("../middlewares/CheckAuthLogin");
//Define Route to create an employee record.
EmployeeRoutes.post(
    "/EmployeeCreate",
    EmployeeControllers.EmployeeCreate);

//Employee List
EmployeeRoutes.get(
    "/EmployeeList/:DepartmentId",
    EmployeeControllers.EmployeeList,
  );

//Employee Deatils(Profile)
EmployeeRoutes.get(
  "/EmployeeDetails/:id",CheckAuthLogin.CheckEmployeeAuth,
  EmployeeControllers.EmployeeDetails,
);

//Employee Update(Profile update)
EmployeeRoutes.patch(
  "/EmployeeUpdate/:id",
  EmployeeControllers.EmployeeUpdate,
);

//Employee Change Password
EmployeeRoutes.put(
  "/EmployeeChangePassword/:id",
  EmployeeControllers.EmployeeChangePassword,
);

//Delete Employee
EmployeeRoutes.delete(
  "/EmployeeDelete/:id",
  EmployeeControllers.EmployeeDelete,
);

//Send Recovery Otp
EmployeeRoutes.get(
  "/SendRecoveryOtp/:Email",
  EmployeeControllers.SendRecoveryOtp,
);

//Verify Recovery Otp
EmployeeRoutes.get(
  "/VerifyRecoveryOtp/:Email/:OtpCode",
  EmployeeControllers.VerifyRecoveryOtp,
);

//Recovery Reset Pass
EmployeeRoutes.post(
  "/RecoveryResetPass/:Email/:OtpCode",
  EmployeeControllers.RecoveryResetPass,
);

//DepartmentHeads
EmployeeRoutes.get(
  "/DepartmentHeads",
  EmployeeControllers.DepartmentHeads,
);

//DepartmentHeads
EmployeeRoutes.get(
  "/DepartmentHead",
  EmployeeControllers.DepartmentHead,
);



module.exports = EmployeeRoutes;
