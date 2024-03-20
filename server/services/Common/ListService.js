const ListService = async (req, DataModel, SearchArray) => {
    try {
        // Retrieve all the documents from the database
        const documents = await DataModel.find();
    
        // Return the list of departments
        return documents;
      } catch (error) {
        // Handle errors
        throw error;
      }
  };
  
  module.exports = ListService;