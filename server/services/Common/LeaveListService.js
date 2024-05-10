const LeaveModel = require("../../models/Leave");

const LeaveListService = async (employeeId) => {
  try {
    const leaveList = await LeaveModel.find({ EmployeeId: employeeId })
      .populate("LeaveType", "LeaveTypeName")
      .select(
        "LeaveType LeaveDetails StartLeaveDate EndLeaveDate NumOfDays Manager_Status createdAt",
      );
    return leaveList;
  } catch (error) {
    throw error;
  }
};

module.exports = LeaveListService;
