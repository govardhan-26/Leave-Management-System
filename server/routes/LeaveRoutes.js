const LeaveRoutes = require("express").Router();
const LeaveControllers = require("../controllers/Leave/LeaveControllers");
// const { CheckEmployeeAuth, CheckAdminAuth, CheckHodAuth } = require("../middleware/CheckAuthLogin");

//Leave Create
LeaveRoutes.post(
    "/LeaveCreate",
    LeaveControllers.LeaveCreate,
  );

  module.exports = LeaveRoutes;