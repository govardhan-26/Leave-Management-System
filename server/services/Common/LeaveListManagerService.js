const LeaveModel = require("../../models/Leave");
const LeaveListManagerService = async (managerId, status) => {
  try {
    console.log(
      "Fetching leave list for manager:",
      managerId,
      "with status:",
      status,
    );

    let matchQuery = {};

    if (status !== "all") {
      matchQuery["Manager_Status"] = status; // Only get leave requests with the specified status
    }

    const leaveList = await LeaveModel.find({
      Superior_Id: managerId,
      ...matchQuery,
    })
      .populate({
        path: "EmployeeId",
        select: "FirstName LastName",
      })
      .populate({
        path: "LeaveType",
        select: "LeaveTypeName",
      })
      .select(
        "StartLeaveDate EndLeaveDate NumOfDays LeaveDetails Manager_Id Superior_Id Manager_Status",
      );

    return leaveList;
  } catch (error) {
    throw error;
  }
};

module.exports = LeaveListManagerService;
