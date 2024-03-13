const ListService = async (Request, DataModel, SearchArray) => {
    try {
        // Retrieve all departments from the database
        const departments = await DataModel.find();
    
        // Return the list of departments
        return departments;
      } catch (error) {
        // Handle errors
        throw error;
      }
  };
  
  module.exports = ListService;