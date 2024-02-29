const {CreateError} = require("../../helpers/ErrorHandler");
const { HashPassword } = require("../../utilities/BcryptHelper");


function isStrongPassword(password) {
    // Regular expression to match the password criteria
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
}

const EmployeeCreateService = async (req,DataModel) =>{
    let PostBody = req.body;
    const Employee = await DataModel.aggregate([
        {
            $match: {Email: PostBody.Email},
        },
    ]) ;
    if(Employee.length>0)
    {
        throw CreateError("Employee already created ",400);
    }

    if(isStrongPassword(PostBody.Password) === false){
       throw  CreateError('The Password should contain at least one uppercase letter,'+         
           'one lowercase letter, one number and one special character',400);}    
    PostBody.Password = await HashPassword(PostBody.Password);
    await DataModel.create(PostBody);
    
    return {message : "Employee created successfully"};
};

module.exports = EmployeeCreateService;