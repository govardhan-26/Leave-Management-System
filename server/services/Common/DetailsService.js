const ObjectId = require("mongoose").Types.ObjectId;

// const DetailsService = async (Request, DataModel) => {
//   const DetailsID = Request.params.id;

//   const data = await DataModel.aggregate([
//     {
//       $match: {
//         _id: new ObjectId(DetailsID),
//       },
//     },
//   ]);

//   return data;
// };

const DetailsService = async (Request, DataModel) => {
  const DetailsID = Request.params.id;
    // Use findOne to directly get the document with the specified ID
    const data = await DataModel.findOne({ _id: new ObjectId(DetailsID) });

    return data;

};

module.exports = DetailsService;


module.exports = DetailsService;
