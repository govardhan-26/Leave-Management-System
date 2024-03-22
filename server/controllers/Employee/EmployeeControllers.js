const EmployeeCreateService = require("../../services/Employee/EmployeeCreateService");
const Employee = require("../../models/Employee");
const EmployeeListService = require("../../services/Employee/EmployeeListService");
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
  
module.exports = { 
    EmployeeCreate,
    EmployeeList,
 };