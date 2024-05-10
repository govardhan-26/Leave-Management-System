const LeaveRoutes = require("express").Router();
const LeaveControllers = require("../controllers/Leave/LeaveControllers");
const CheckAuthLogin = require("../middlewares/CheckAuthLogin");
const { CheckEmployeeAuth } = require("../middlewares/CheckAuthLogin");
CheckEmployeeAuth;
// const { CheckEmployeeAuth, CheckAdminAuth, CheckHodAuth } = require("../middleware/CheckAuthLogin");

//Leave Create
LeaveRoutes.post("/LeaveCreate", LeaveControllers.LeaveCreate);

//Leave List
LeaveRoutes.get(
  "/LeaveList/",
  CheckAuthLogin.CheckEmployeeAuth,
  LeaveControllers.LeaveList,
);

//Leave Details
LeaveRoutes.get("/LeaveDetails/:id", LeaveControllers.LeaveDetails);

//Leave Delete
LeaveRoutes.delete("/LeaveDelete/:id", LeaveControllers.LeaveDelete);

//Leave Update
LeaveRoutes.patch("/LeaveUpdate/:id", LeaveControllers.LeaveUpdate);

//Leave List Hod
LeaveRoutes.post("/LeaveListHod", LeaveControllers.LeaveListHod);

LeaveRoutes.post("/LeaveListManager", LeaveControllers.LeaveListManager);
module.exports = LeaveRoutes;

