const ManagerSelectionService = async (departmentId, role, EmployeeModel) => {
    let query = {};
  
    // Filter by department ID
    if (departmentId) {
      query.DepartmentId = departmentId; // Use DepartmentId field
    }
  
    // Filter by role
    if (role) {
      query.Roles = role;
    }
  
    // Fetch employees based on the department and role
    const employees = await EmployeeModel.find(query).select('FirstName LastName _Id');
  
    return employees;
  };
  
  module.exports = ManagerSelectionService;