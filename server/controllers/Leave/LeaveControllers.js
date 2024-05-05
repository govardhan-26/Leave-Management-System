const ObjectId = require("mongoose").Types.ObjectId;

const LeaveModel = require("../../models/Leave");
const { CreateError } = require("../../helpers/ErrorHandler");
const CheckAssociateService = require("../../services/Common/CheckAssociateService");
const CreateService = require("../../services/Common/CreateService");
const DropDownService = require("../../services/Common/DropDownService");
// const LeaveListService = require("../../services/Common/L");
const UpdateService = require("../../services/Common/UpdateService");
const DeleteService = require("../../services/Common/DeleteService");
const DetailsService = require("../../services/Common/DetailsService");
const LeaveListService = require("../../services/Common/LeaveListService");
const LeaveListHodService = require('../../services/Common/LeaveListHodService');

/**
 * @desc Leave Create
 * @access private
 * @route /api/v1/Leave/LeaveCreate
 * @method POST
 */

const LeaveCreate = async (req, res, next) => {
    try {
      const result = await CreateService(req, LeaveModel);
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  };


  /**
 * @desc LeaveList
 * @access private
 * @route /api/v1/Leave/LeaveList/:EmployeeId
 * @methud GET
 */

const LeaveList = async (req, res, next) => {
  try {
    const EmployeeId = req.params.EmployeeId;
    console.log(EmployeeId); // Assuming employeeId is passed in the URL params
    const leaveList = await LeaveListService(EmployeeId);
    res.json(leaveList);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Leave Details
 * @access private
 * @route /api/v1/Leave/LeaveDetails/:id
 * @methud GET
 */

const LeaveDetails = async (req, res, next) => {
  try {
    const result = await DetailsService(req, LeaveModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};


/**
 * @desc Leave  Delete
 * @access private
 * @route /api/v1/Leave/LeaveDelete/:id
 * @methud DELETE
 */

const LeaveDelete = async (req, res, next) => {
  try {
    const result = await DeleteService(req, LeaveModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Leave Update
 * @access private
 * @route /api/v1/Leave/LeaveUpdate/:id
 * @methud PATCH
 */

const LeaveUpdate = async (req, res, next) => {
  try {
    const result = await UpdateService(req, LeaveModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
  
/**
 * @desc Leave List Hod
 * @access private
 * @route /api/v1/Leave/LeaveListHod
 * @methud Post
 */
// const LeaveListHod = async (req, res, next) => {
//   try {
//     const departmentShortName = req.body.DepartmentShortName; // Assuming departmentShortName is passed in the request body
//     console.log(departmentShortName);
//     const leaveList = await LeaveListHodService(departmentShortName);

//     res.json(leaveList);
//   } catch (error) {
//     next(error);
//   }
// };

//Body ={ DepartmentShortname and Role_BStatus}
const LeaveListHod = async (req, res, next) => {
  try {
    const departmentShortName = req.body.DepartmentShortName;
    const status = req.body.Role_BStatus; // Extract departmentShortName and status from the request body

    if (!departmentShortName || !status) {
      throw new Error("DepartmentShortName and status are required in the request body");
    }

    const leaveList = await LeaveListHodService(departmentShortName, status);

    res.json(leaveList);
  } catch (error) {
    next(error);
  }
};

  module.exports = {
    LeaveCreate,
    LeaveList,
    LeaveDetails,
    LeaveDelete,
    LeaveUpdate,
    LeaveListHod,
  }