
const ObjectId = require("mongoose").Types.ObjectId;
// const EmployeeUpdateService = async (Request, DataModel) => {
//   const { EmployeeId } = Request;
//   const {
//     FirstName,
//     LastName,
//     Gender,
//     DateOfBirth,
//     Address,
//     Phone,
//     Image,
//     Email,
//   } = Request.body;

//   await DataModel.findByIdAndUpdate(
//     { _id: ObjectId(EmployeeId) },
//     {
//       Email,
//       FirstName,
//       LastName,
//       Gender,
//       DateOfBirth,
//       Address,
//       Phone,
//       Image,
//     },
//     { new: true },
//   );

//   return { message: "Employee Update Successfull" };
// };
// module.exports = EmployeeUpdateService;


const EmployeeUpdateService = async (EmployeeId, requestBody, DataModel) => {
  const {
    FirstName,
    LastName,
    Gender,
    DateOfBirth,
    Address,
    Phone,
    Image,
    Email,
  } = requestBody;

  const updateFields = {};

  // Only update fields that are present in the request body
  if (FirstName) updateFields.FirstName = FirstName;
  if (LastName) updateFields.LastName = LastName;
  if (Gender) updateFields.Gender = Gender;
  if (DateOfBirth) updateFields.DateOfBirth = DateOfBirth;
  if (Address) updateFields.Address = Address;
  if (Phone) updateFields.Phone = Phone;
  if (Image) updateFields.Image = Image;
  if (Email) updateFields.Email = Email;

  try {
    const updatedEmployee = await DataModel.findByIdAndUpdate(
      EmployeeId,
      updateFields,
      { new: true }
    );

    if (!updatedEmployee) {
      throw new Error("Employee not found");
    }

    return { message: "Employee Update Successful", updatedEmployee };
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = EmployeeUpdateService;
