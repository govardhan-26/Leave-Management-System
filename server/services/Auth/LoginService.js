const CreateToken = require("../../utilities/CreateToken");
const  {CreateError}  = require("../../helpers/ErrorHandler");
const {VerifyPassword} = require("../../utilities/BcryptHelper");

const LoginService = async (request,DataModel)=>{
    const {Email,Password} = request.body;
    if(!Email || !Password)
    {
        throw CreateError("Invalid Data", 400);
    }
    const User = await  DataModel.aggregate([{$match: {Email}}]);
    if(!User.length>0)
    {
        throw CreateError("User not found", 404);
    }
    const verifyPassword = await VerifyPassword(Password,User[0].Password);
    if(!verifyPassword)
    {
        throw CreateError("Unauthorized Credentials", 401);
    }

    const payLoad = {
        id: User[0]._id,
    }
    delete User[0].Password;
    const token = CreateToken(payLoad);
    return { AccessToken: token, UserDetails: User[0] };

};

module.exports = LoginService;