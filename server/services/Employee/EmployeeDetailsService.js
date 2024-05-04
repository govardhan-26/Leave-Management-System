const ObjectId = require("mongoose").Types.ObjectId;

const EmployeeDetailsService = async (Request, DataModel) => {
  const DetailsID = Request.params.id;
    // Use findOne to directly get the document with the specified ID
    const data = await DataModel.findOne({ _id: new ObjectId(DetailsID) });

    return data;

};

module.exports = EmployeeDetailsService;



