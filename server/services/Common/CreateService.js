// const CreateService = async (Request, DataModel) => {
//     const PostBody = Request.body;
//     PostBody.EmployeeId = Request.EmployeeId;
  
//     const data = new DataModel(PostBody);
//     return await data.save();
//   };
  
//   module.exports = CreateService;

const CreateService = async (Request, DataModel) => {
  const postBody = Request.body; // Get the request body
  const data = new DataModel(postBody); // Create a new instance of the DataModel with the request body
  return await data.save(); // Save the data to the database
};

module.exports = CreateService;
