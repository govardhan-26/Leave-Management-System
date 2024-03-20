const LeaveTypeRoutes = require("express").Router();
const LeaveTypeControllers = require("../controllers/LeaveType/LeaveTypeControllers");


//LeaveType Create
LeaveTypeRoutes.post(
  "/LeaveTypeCreate",
  LeaveTypeControllers.LeaveTypeCreate,
);

//LeaveType List
LeaveTypeRoutes.get(
    "/LeaveTypeList",
    LeaveTypeControllers.LeaveTypeList,
  );

  
  //LeaveType Drop Down
LeaveTypeRoutes.get(
    "/LeaveTypeDropDown",
    LeaveTypeControllers.LeaveTypeDropDown,
  );

  //LeaveType Details
LeaveTypeRoutes.get(
    "/LeaveTypeDetails/:id",
    LeaveTypeControllers.LeaveTypeDetails,
  );

  //LeaveType Update
LeaveTypeRoutes.patch(
    "/LeaveTypeUpdate/:id",
    LeaveTypeControllers.LeaveTypeUpdate,
  );

  LeaveTypeRoutes.delete(
    "/LeaveTypeDelete/:id", // Use a parameter name like 'value' for LeaveTypeName
    LeaveTypeControllers.LeaveTypeDelete,
);

  
module.exports = LeaveTypeRoutes;
