const EmployeeCreateService = require("../../services/Employee/EmployeeCreateService");
const Employee = require("../../models/Employee");

const EmployeeCreate = async (req,res,next)=>{
    try{
       const result = await  EmployeeCreateService(req,Employee);
       res.json(result);
    }catch(error){
        next(error);
    }
};

module.exports = { EmployeeCreate };