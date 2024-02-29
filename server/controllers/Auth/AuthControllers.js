const Employee =  require("../../models/Employee");
const LoginService = require("../../services/Auth/LoginService");

const LoginUser = async (req,res,next)=>{
    try{
        const result  = await LoginService(req,Employee);
        res.json(result);
    }
    catch(error)
    {
        next(error);
    }
    
};

module.exports = {
    LoginUser,
  };
