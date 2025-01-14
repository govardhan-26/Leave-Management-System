const { Schema, model } = require('mongoose');

const LeaveTypeSchema = new Schema(
  {
    LeaveTypeName: {
      type: String,
      required: true,
      unique: true,
    },
    LeaveTypeDetails: {
      type: String,
    },
    LeaveTypeStatus: {
      type: Boolean,
      required: true,
    },
  },
  { 
    timestamps: true,
  }
);

const LeaveType = model("LeaveType", LeaveTypeSchema);
module.exports = LeaveType;
