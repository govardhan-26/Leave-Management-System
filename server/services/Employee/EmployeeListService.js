
const EmployeeListService = async (req, EmployeeModel, DepartmentId) => {
    try {
      let query = {DepartmentId};
    //   if (DepartmentId && DepartmentId !== "0") {
    //     query.DepartmentId = DepartmentId;
    //   }
  
      const employees = await EmployeeModel.find(query).exec();
      return employees;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
  module.exports = EmployeeListService;
  






// const EmployeeListService = async (req, EmployeeModel, deptId) => {
//     // EmployeeModel is passed as a parameter
//   console.log(deptId);
//     let matchQuery = {};
//       matchQuery.DepartmentId = deptId;
    
  
//     const aggregationPipeline = [
//       {
//         $match: matchQuery
//       },
//       {
//         $facet: {
//           Total: [{ $count: "count" }],
//           Data: [
//             { $sort: { _id: -1 } },
//           ],
//         },
//       },
//     ];
  
//     return await EmployeeModel.aggregate(aggregationPipeline);
//   };
  
//   module.exports = EmployeeListService ;
  


// // MyModel.find({ name: 'john', age: { $gte: 18 } }).exec();