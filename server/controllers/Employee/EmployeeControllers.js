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
 * @route /api/v1/Employee/EmployeeList/:DepratmentId
 * @method GET
 */

const EmployeeList = async (req, res, next) => {
    const searchKeyword = req.params.searchKeyword;
    // //  // Ensure that searchKeyword is a string
    // if (typeof searchKeyword !== 'string') {
    //      throw new Error('Search keyword must be a string');
    // }

    let SearchRgx = { $regex: searchKeyword, $options: "i" };
    let SearchArray = [
      {
        FirstName: SearchRgx,
        LastName: SearchRgx,
        Gender: SearchRgx,
        Address: SearchRgx,
        Phone: SearchRgx,
        Email: SearchRgx,
      },
    ];
  
    try {
      const result = await EmployeeListService(req, Employee, SearchArray);
      res.json(result);
    } catch (error) {
      next(error);
    }
  };

module.exports = { 
    EmployeeCreate,
    EmployeeList,
 };