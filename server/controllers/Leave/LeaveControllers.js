const ObjectId = require("mongoose").Types.ObjectId;

const LeaveModel = require("../../models/Leave");
const { CreateError } = require("../../helpers/ErrorHandler");
const CheckAssociateService = require("../../services/Common/CheckAssociateService");
const CreateService = require("../../services/Common/CreateService");
const DropDownService = require("../../services/Common/DropDownService");
// const LeaveListService = require("../../services/Common/L");
const UpdateService = require("../../services/Common/UpdateService");
const DeleteService = require("../../services/Common/DeleteService");
const DetailsService = require("../../services/Common/DetailsService");

/**
 * @desc Leave Create
 * @access private
 * @route /api/v1/Leave/LeaveCreate
 * @method POST
 */

const LeaveCreate = async (req, res, next) => {
    try {
      const result = await CreateService(req, LeaveModel);
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  };

  
  module.exports = {
    LeaveCreate,
  }