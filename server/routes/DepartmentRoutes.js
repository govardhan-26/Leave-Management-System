const DepartmentRoutes = require("express").Router();
const DepartmentControllers = require("../controllers/Department/DepartmentControllers");
// const {
//   CheckEmployeeAuth,
//   CheckAdminAuth,
// } = require("../middleware/CheckAuthLogin");

//Department Create
DepartmentRoutes.post(
  "/DepartmentCreate",
  DepartmentControllers.DepartmentCreate,
);

//Department List
DepartmentRoutes.get(
    "/DepartmentList",
    DepartmentControllers.DepartmentList,
  );

  //Department Drop Down
DepartmentRoutes.get(
  "/DepartmentDropDown",
  DepartmentControllers.DepartmentDropDown,
);

//Department Details
DepartmentRoutes.get(
  "/DepartmentDetails/:id",
  DepartmentControllers.DepartmentDetails,
);


//Department Update
DepartmentRoutes.patch(
  "/DepartmentUpdate/:id",
  DepartmentControllers.DepartmentUpdate,
);

//Department Delete
DepartmentRoutes.delete(
  "/DepartmentDelete/:id",
  DepartmentControllers.DepartmentDelete,
);
module.exports = DepartmentRoutes;