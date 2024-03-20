
// const ObjectId = require("mongoose").Types.ObjectId;

// const DeleteService = async (Request, DataModel) => {
//   const DeleteID = Request.params.id;

//   const QueryObject = {};
//   QueryObject._id = DeleteID;

//   return await DataModel.deleteOne(QueryObject);
// };

const DeleteService = async (Request, DataModel) => {
  const DeleteValue = Request.params.value; // Get the LeaveTypeName from request parameters

  // Construct the query object to find the document by LeaveTypeName
  const QueryObject = { LeaveTypeName: DeleteValue };

  // Delete the document based on the query object
  return await DataModel.deleteOne(QueryObject);
};



module.exports = DeleteService;