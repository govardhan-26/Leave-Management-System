const Employee = require("../../models/Employee");

const EmployeeCreateService = require("../../services/Employee/EmployeeCreateService");
const EmployeeListService = require("../../services/Employee/EmployeeListService");
const EmployeeDetailsService = require("../../services/Employee/EmployeeDetailsService");
const DetailsService = require("../../services/Common/DetailsService");
const UpdateService = require("../../services/Common/UpdateService");
const EmployeeUpdateService = require("../../services/Employee/EmployeeUpdateService");
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

const EmployeeUpdate = async (req, res, next) => {
    try {
      const result = await EmployeeUpdateService(req, Employee);
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
 };