const ObjectId = require("mongoose").Types.ObjectId;
const LeaveTypeModel = require("../../models/LeaveType");
const {CreateError} = require("../../helpers/ErrorHandler");
const CheckAssociateService = require("../../services/Common/CheckAssociateService");
const CreateService = require("../../services/Common/CreateService");
const DropDownService = require("../../services/Common/DropDownService");
const ListService = require("../../services/Common/ListService");
const UpdateService = require("../../services/Common/UpdateService");
const DeleteService = require("../../services/Common/DeleteService");
const DetailsService = require("../../services/Common/DetailsService");

/**
 * @desc LeaveType Create
 * @access private
 * @route /api/v1/LeaveType/LeaveTypeCreate
 * @method POST
 */

const LeaveTypeCreate = async (req, res, next) => {
    try {
      const associal = await CheckAssociateService(
        { LeaveTypeName: req.body.LeaveTypeName },
        LeaveTypeModel,
      );
  
      if (associal) {
        throw CreateError("This LeaveType Already Created");
      }
  
      const result = await CreateService(req, LeaveTypeModel);
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  };

  /**
 * @desc LeaveType List
 * @access private
 * @route /api/v1/LeaveType/LeaveTypeList
 * @method GET
 */

  const LeaveTypeList = async (req, res, next) => {
    const searchKeyword = req.params.searchKeyword;
    let SearchRgx = { $regex: searchKeyword, $options: "i" };
    let SearchArray = [
        { LeaveTypeName: SearchRgx ,
          LeaveTypeDetails: SearchRgx}];
  
    try {
      const result = await ListService(req, LeaveTypeModel, { $or: SearchArray });
      res.json(result);
    } catch (error) {
      next(error);
    }
  };
  
/**
 * @desc LeaveType Drop Down
 * @access private
 * @route /api/v1/LeaveType/LeaveTypeDropDown
 * @methud GET
 */

const LeaveTypeDropDown = async (req, res, next) => {
    try {
      const result = await DropDownService(
        req,
        LeaveTypeModel,
        {
          LeaveTypeStatus: true,
        },
        {
          label: "$LeaveTypeName",
          value: "$_id",
        },
      );
      res.json(result);
    } catch (error) {
      next(error);
    }
  };

  /**
 * @desc LeaveType Details
 * @access private
 * @route /api/v1/LeaveType/LeaveTypeDetails/:id
 * @methud GET
 */

  const LeaveTypeDetails = async (req, res, next) => {
    try {
      const result = await DetailsService(req, LeaveTypeModel);
      const leaveTypeDetails = result ? result.LeaveTypeDetails : null;
      res.json(leaveTypeDetails);
    } catch (error) {
      next(error);
    }   
  };

  /**
 * @desc LeaveType Update
 * @access private
 * @route /api/v1/LeaveType/LeaveTypeUpdate/:id
 * @methud PATCH
 */

  const LeaveTypeUpdate = async (req, res, next) => {
    try {
      const result = await UpdateService(req, LeaveTypeModel);
      res.json(result);
    } catch (error) {
      next(error);
    }
  };

  /**
 * @desc LeaveType  Delete
 * @access private
 * @route /api/v1/LeaveType/LeaveTypeDelete/:id
 * @method DELETE
 */

  const LeaveTypeDelete = async (req, res, next) => {
    try {
      const result = await DeleteService(req, LeaveTypeModel);
      res.json(result);
    } catch (error) {
      next(error);
    }
  };

  module.exports = {
    LeaveTypeCreate,
    LeaveTypeList,
    LeaveTypeDropDown,
    LeaveTypeDetails,
    LeaveTypeUpdate,
    LeaveTypeDelete,
  }
