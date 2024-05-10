// const {CreateError} = require("../../helpers/ErrorHandler");
// const {HashPassword,VerifyPassword} = require("../../utilities/BcryptHelper");

// const EmployeePasswordChangeService = async (Request, DataModel) => {
//     const Email = Request.Email;
//     let { PreviousPassword, NewPassword } = Request.body;

    
//     const verifyPassword = await VerifyPassword(
//       PreviousPassword,
//       Request.Password,
//     );
  
//     if (!verifyPassword) {
//       throw CreateError("Previous Password Not Match", 400);
//     }
  
//     NewPassword = await HashPassword(Request.body.NewPassword);
  
//     await DataModel.updateOne(
//       { Email: Email },
//       { Password: NewPassword },
//       { new: true },
//     );
  
//     return { message: "Employee Password Change Successfull" };
//   };
//   module.exports = EmployeePasswordChangeService;

const { CreateError } = require("../../helpers/ErrorHandler");
const { HashPassword, VerifyPassword } = require("../../utilities/BcryptHelper");

const EmployeePasswordChangeService = async (Request, DataModel) => {
    const Email = Request.Email;
    // console.log("Email:", Email);
    let { PreviousPassword, NewPassword } = Request;

    // Verify if PreviousPassword matches the stored password
    const employee = await DataModel.findOne({ Email: Email });
    if (!employee) {
        throw CreateError("Employee not found", 404);
    }

    const verifyPassword = await VerifyPassword(PreviousPassword, employee.Password);
    console.log(employee.Password);
    if (!verifyPassword) {
        throw CreateError("Previous Password does not match", 400);
    }

    // Check if the new password is the same as the previous password
    if (PreviousPassword === NewPassword) {
        throw CreateError("New Password must be different from Previous Password", 400);
    }

    // Hash the new password
    NewPassword = await HashPassword(NewPassword);

    // Update the password in the database
    await DataModel.updateOne(
      { Email: Email },
      { Password: NewPassword }
    );

    return { message: "Employee Password Change Successful" };
};

module.exports = EmployeePasswordChangeService;
