const ObjectId = require("mongoose").Types.ObjectId;
const DetailsService = async (Request, DataModel) => {
  const DetailsID = Request.EmployeeId;
  const data = await DataModel.findOne({
    _id: new ObjectId(DetailsID),
  }).populate("DepartmentId");
  return data;
};

module.exports = DetailsService;
