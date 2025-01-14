const { ObjectId } = require("mongoose").Types;

const CreateError = require("../helpers/ErrorHandler");
const DecodedToken = require("../utilities/DecodedToken");
const Employee = require("../models/Employee");

//Check Employee Auth
const CheckEmployeeAuth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    let token = authorization.split(" ")[1];
    const decodedData = await DecodedToken(token);
    const employee = await Employee.findOne({ _id: decodedData.id });
    req.Email = employee.Email;
    req.EmployeeId = employee._id;
    req.Password = employee.Password;
    if (employee == undefined) {
      throw CreateError("Invalid Credentials", 401);
    }
    next();
  } catch (error) {
    res.status(401).json({ message: "invalid Credentials" });
  }
};

const CheckRole_AAuth = async (req, res, next) => {
  try {
    const { Email } = req;
    const staff = await Employee.aggregate([
      {
        $match: {
          $and: [{ Email: Email }, { Roles: "Role_A" }],
        },
      },
    ]);

    if (!staff.length > 0) {
      throw CreateError("invalid Credentials", 401);
    }
    req.Roles = staff[0].Roles;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid Credentials" });
  }
};

const CheckRole_BAuth = async (req, res, next) => {
  try {
    const { Email } = req;
    const staff = await Employee.aggregate([
      {
        $match: {
          $and: [{ Email: Email }, { Roles: "Role_B" }],
        },
      },
    ]);

    if (!staff.length > 0) {
      throw CreateError("invalid Credentials", 401);
    }
    req.Roles = staff[0].Roles;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid Credentials" });
  }
};

//chech Role_C Auth

const CheckRole_CAuth = async (req, res, next) => {
  try {
    const { Email } = req;
    const staff = await Employee.aggregate([
      {
        $match: {
          $and: [{ Email: Email }, { Roles: "Role_C" }],
        },
      },
    ]);

    if (!staff.length > 0) {
      throw CreateError("invalid Credentials", 401);
    }
    req.Roles = staff[0].Roles;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid Credentials" });
  }
};

//chech Role_D Auth

const CheckRole_DAuth = async (req, res, next) => {
  try {
    const { Email } = req;
    const staff = await Employee.aggregate([
      {
        $match: {
          $and: [{ Email: Email }, { Roles: "Role_D" }],
        },
      },
    ]);

    if (!staff.length > 0) {
      throw CreateError("invalid Credentials", 401);
    }
    req.Roles = staff[0].Roles;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid Credentials" });
  }
};

//chech Admin Auth

const CheckAdminAuth = async (req, res, next) => {
  try {
    const { Email } = req;
    const staff = await Employee.aggregate([
      {
        $match: {
          $and: [{ Email: Email }, { Roles: "Admin" }],
        },
      },
    ]);

    if (!staff.length > 0) {
      throw CreateError("invalid Credentials", 401);
    }
    req.Roles = staff[0].Roles;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid Credentials" });
  }
};

module.exports = {
  CheckEmployeeAuth,
  CheckRole_AAuth,
  CheckRole_BAuth,
  CheckRole_CAuth,
  CheckRole_DAuth,
  CheckAdminAuth,
};
