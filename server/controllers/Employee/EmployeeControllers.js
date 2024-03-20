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
  const searchKeyword = req.params.DepartmentId;
  console.log(searchKeyword);

  let query = {};

  // Check if searchKeyword is a valid phone number
  if (/^\d{10}$/.test(searchKeyword)) {
      // If it's a valid phone number, search directly on Phone field
      query.Phone = searchKeyword;
  } else {
      // If it's not a phone number, perform case-insensitive partial match on other fields
      let searchRgx = new RegExp(searchKeyword, 'i');
      query.$or = [
          { FirstName: searchRgx },
          { LastName: searchRgx },
          { Gender: searchRgx },
          { Address: searchRgx },
          { Email: searchRgx }
      ];
  }

  try {
      const result = await Employee.find(query);
      console.log(result);
      res.json(result);
  } catch (error) {
      next(error);
  }
};



module.exports = { 
    EmployeeCreate,
    EmployeeList,
 };