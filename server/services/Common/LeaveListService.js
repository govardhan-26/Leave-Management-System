const LeaveModel = require('../../models/Leave');

const LeaveListService = async (req, res, next) => {
  try {
    const searchKeyword = req.query.searchKeyword || '';
    const searchRegex = new RegExp(searchKeyword, 'i');

    const leaveList = await LeaveModel.find({
      $or: [
        { LeaveDetails: { $regex: searchRegex } },
        { LeaveType: { $regex: searchRegex } }
      ]
    })
    .populate('EmployeeId', 'FirstName LastName Email Image')
    .populate('LeaveType', 'LeaveTypeName')
    .select('LeaveType LeaveDetails NumOfDay HodStatus AdminStatus createdAt');

    // Check if leaveList is undefined or empty
    if (!leaveList || leaveList.length === 0) {
      return res.status(404).json({ message: 'No leave records found' });
    }
    
    res.json(leaveList);
  } catch (error) {
    // Check if the error is due to missing 'next' function
    if (typeof next === 'function') {
      next(error); // Pass the error to the error handling middleware
    } else {
      console.error('Error in LeaveListService:', error);
      res.status(500).json({ message: 'Internal server error' }); // Send a generic error response
    }
  }
};

module.exports = LeaveListService;
