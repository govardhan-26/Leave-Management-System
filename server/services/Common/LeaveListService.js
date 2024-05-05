const LeaveModel = require('../../models/Leave');

const LeaveListService = async (employeeId) => {
  try {
    console.log("Fetching leave list for employee ID:", employeeId); 
    const leaveList = await LeaveModel.find({ EmployeeId: employeeId })
      .populate('LeaveType', 'LeaveTypeName')
      .select('LeaveType LeaveDetails StartLeaveDate EndLeaveDate NumOfDays Role_BStatus Role_CStatus createdAt');
    
    return leaveList;
  } catch (error) {
    throw error;
  }
};

module.exports = LeaveListService;
