const ObjectId = require("mongoose").Types.ObjectId;
const DetailsServiceEmp = async (employee_id, DataModel) => {
  const data = await DataModel.findOne({
    _id: new ObjectId(employee_id),
  }).populate("DepartmentId");
  return data;
};

module.exports = DetailsServiceEmp;
