const Employee = require("../../models/Employee");
const Otp = require("../../models/Otp");

const EmployeeCreateService = require("../../services/Employee/EmployeeCreateService");
const EmployeeListService = require("../../services/Employee/EmployeeListService");
const EmployeeDetailsService = require("../../services/Employee/EmployeeDetailsService");
const DetailsService = require("../../services/Common/DetailsService");
const UpdateService = require("../../services/Common/UpdateService");
const EmployeeUpdateService = require("../../services/Employee/EmployeeUpdateService");
const EmployeePasswordChangeService = require("../../services/Employee/EmployeePasswordChangeService");
const DeleteService = require("../../services/Common/DeleteService");
const SendRecoveryOtpService = require("../../services/Employee/SendRecoveryOtpService");
const VerifyRecoveryOtpService = require("../../services/Employee/VerifyRecoveryOtpService");
const RecoveryResetPassService = require("../../services/Employee/RecoveryResetPassService");
const ListQueryJoinService = require("../../services/Common/ListQueryJoinServie");
/**
 * @desc Employee Create
 * @access private
 * @route /api/v1/Employee/EmployeeCreate
 * @method POST
 */

const EmployeeCreate = async (req,res,next)=>{
    try{
       const result = await  EmployeeCreateService(req,Employee);
       res.json(result);
    }catch(error){
        next(error);
    }
};

/**
 * @desc Employee List
 * @access private
 * @route /api/v1/Employee/EmployeeList/:DepartmentId
 * @method GET
 */

const EmployeeList = async (req, res, next) => {
    //   const deptId  = req.params;
    const DepartmentId = req.params.DepartmentId;
    console.log(DepartmentId);
    try { const result = await EmployeeListService(req, Employee,  DepartmentId);
        res.json(result);
      } catch (error) { next(error);
      }
    };
  

/**
 * @desc Employee Details
 * @access private
 * @route /api/v1/Employee/EmployeeDetails/:Id
 * @methud GET
 */

const EmployeeDetails = async (req, res, next) => {
    try {
      const result = await DetailsService(req, Employee);
      res.json(result);
    } catch (error) {
      next(error);
    }
  };


/**
 * @desc Update Employee
 * @access private
 * @route /api/v1/Employee/EmployeeUpdate/:id
 * @methud PATCH
 */

// const EmployeeUpdate = async (req, res, next) => {
//     try {
//       const result = await EmployeeUpdateService(req, Employee);
//       res.json(result);
//     } catch (error) {
//       next(error);
//     }
//   };

  const EmployeeUpdate = async (req, res, next) => {
    try {
      const EmployeeId = req.params.id;
      const requestBody = req.body;
      const result = await EmployeeUpdateService(EmployeeId, requestBody, Employee);
      res.json(result);
    } catch (error) {
      next(error);
    }
};

/**
 * @desc Employee Change Password
 * @access private
 * @route /api/v1/Employee/EmployeeChangePassword/:id
 * @methud PUT
 */

const EmployeeChangePassword = async (req, res, next) => {
  try {
    const result = await EmployeePasswordChangeService(req.body, Employee);
    res.json(result);
  } catch (error) {
    next(error);
  }
};


/**
 * @desc Employee Delete
 * @access private
 * @route /api/v1/Employee/EmployeeDelete/:id
 * @methud DELETE
 */

const EmployeeDelete = async (req, res, next) => {
  try {
    const result = await DeleteService(req, Employee);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Send Recovery Otp
 * @access public
 * @route /api/v1/Employee/SendRecoveryOtp/:Email
 * @methud GET
 */

const SendRecoveryOtp = async (req, res, next) => {
  try {
    const result = await SendRecoveryOtpService(req, Employee, Otp);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Verify Recovery Otp
 * @access public
 * @route /api/v1/Employee/VerifyRecoveryOtp/:/Email/:OtpCode
 * @methud GET
 */

const VerifyRecoveryOtp = async (req, res, next) => {
  try {
    const result = await VerifyRecoveryOtpService(req, Otp);
    res.json(result);
  } catch (error) {
    console.log(error);
    next(error);
  }
};


/**
 * @desc Recovery Reset Password
 * @access public
 * @route /api/v1/Employee/RecoveryResetPass/:Email/:OtpCode
 * @methud POST
 */

const RecoveryResetPass = async (req, res, next) => {
  try {
    const result = await RecoveryResetPassService(req, Employee, Otp);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc DepartmentHeads
 * @access private
 * @route /api/v1/Employee/DepartmentHeads
 * @methud GET
 */

const DepartmentHeads = async (req, res, next) => {
  try {
    const MatchQuery = {
      $match: {
        Roles: "Role_B",
      },
    };

    const JoinStage = {
      $lookup: {
        from: "departments",
        localField: "DepartmentId",
        foreignField: "_id",
        as: "Department",
      },
    };

    const projection = {
      $project: {
        Department: {
          $first: "$Department.DepartmentShortName",
        },
        FirstName: 1,
        LastName: 1,
        Email: 1,
        Image: 1,
      },
    };

    const result = await ListQueryJoinService(
      req,
      Employee,
      MatchQuery,
      JoinStage,
      projection,
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
};


/**
 * @desc A specific Department Head
 * @access private
 * @route /api/v1/Employee/DepartmentHead
 * @method GET
 */

const DepartmentHead = async (req, res, next) => {
  try {
    const departmentShortName = req.body.DepartmentShortName; // Assuming the department short name is passed in the request body
    const MatchQuery = {
      $match: {
        Roles: "Role_B", // Assuming "Role_B" is the role of department heads
        "Department.DepartmentShortName": departmentShortName // Filter by department short name
      },
    };

    const JoinStage = {
      $lookup: {
        from: "departments",
        localField: "DepartmentId",
        foreignField: "_id",
        as: "Department",
      },
    };

    const projection = {
      $project: {
        Department: {
          $first: "$Department.DepartmentShortName",
        },
        FirstName: 1,
        LastName: 1,
        Email: 1,
        Image: 1,
      },
    };

    const result = await ListQueryJoinService(
      req,
      Employee,
      MatchQuery,
      JoinStage,
      projection,
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
};


module.exports = { 
    EmployeeCreate,
    EmployeeList,
    EmployeeDetails,
    EmployeeUpdate,
    EmployeeChangePassword,
    EmployeeDelete,
    SendRecoveryOtp,
    VerifyRecoveryOtp,
    RecoveryResetPass,
    DepartmentHeads,
    DepartmentHead,
 };