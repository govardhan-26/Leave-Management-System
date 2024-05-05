const LeaveModel = require("../../models/Leave");
const EmployeeModel = require("../../models/Employee");
const DepartmentModel = require("../../models/Department");

const LeaveListHodService = async (departmentShortName,status) => {
  try {
    console.log("Fetching leave list for department:", departmentShortName);

    // Find the DepartmentId based on the DepartmentShortName
    const department = await DepartmentModel.findOne({ DepartmentShortName: departmentShortName });

    if (!department) {
      throw new Error("Department not found");
    }

    const departmentId = department._id;
   console.log(departmentId);

   let matchQuery = {
    "Employee.DepartmentId": departmentId,
  };

  if (status !== "all") {
    matchQuery["Role_BStatus"] = status; // Only get leave requests with the specified status
  }
    // Now fetch leave requests with pending status for the corresponding department
    const leaveList = await LeaveModel.aggregate([
      {
        $lookup: {
          from: "employees",
          localField: "EmployeeId",
          foreignField: "_id",
          as: "Employee",
        },
      },
      {
        $match: matchQuery,
      },
      {
        $project: {
            Leavetype: "$LeaveType.LeaveTypeName",
          FirstName: "$Employee.FirstName",
          LastName: "$Employee.LastName",
          StartLeaveDate: 1,
          EndLeaveDate: 1,
          NumOfDays: 1,
          RoleBStatus: 1,
        },
      },
    ]);

    // console.log("MongoDB Query:", JSON.stringify(leaveList));

    return leaveList;
  } catch (error) {
    throw error;
  }
};

module.exports = LeaveListHodService;
