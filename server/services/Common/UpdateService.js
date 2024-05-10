const ObjectId = require("mongoose").Types.ObjectId;

const UpdateService = async (Request, DataModel) => {
  const UpdateID = Request.params.id;
  const PostBody = Request.body;
  return DataModel.updateOne({ _id: UpdateID }, PostBody, {
    new: true,
  });
};

module.exports = UpdateService;

