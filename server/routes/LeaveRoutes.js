const LeaveRoutes = require("express").Router();
const LeaveControllers = require("../controllers/Leave/LeaveControllers");
// const { CheckEmployeeAuth, CheckAdminAuth, CheckHodAuth } = require("../middleware/CheckAuthLogin");

//Leave Create
LeaveRoutes.post(
    "/LeaveCreate",
    LeaveControllers.LeaveCreate,
  );


  //Leave List
  LeaveRoutes.get(
     "/LeaveList/:EmployeeId",
    LeaveControllers.LeaveList,
  );


  //Leave Details
  LeaveRoutes.get(
    "/LeaveDetails/:id",
    LeaveControllers.LeaveDetails,
  );


  //Leave Delete
LeaveRoutes.delete(
  "/LeaveDelete/:id",
  LeaveControllers.LeaveDelete,
);


//Leave Update
LeaveRoutes.patch(
  "/LeaveUpdate/:id",
  LeaveControllers.LeaveUpdate,
);
  module.exports = LeaveRoutes;