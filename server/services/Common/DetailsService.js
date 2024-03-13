const ObjectId = require("mongoose").Types.ObjectId;

const DetailsService = async (Request, DataModel) => {
  const DetailsID = Request.params.id;

  const data = await DataModel.aggregate([
    {
      $match: {
        _id: new ObjectId(DetailsID),
      },
    },
  ]);

  return data;
};

module.exports = DetailsService;
