const {Model,Schema} = require('mongoose');
const Employee = require('./Employee');

const LeaveSchema = new Schema(
    {
        EmployeeId: {
            type: Schema.Types.ObjectId,
            ref: "Employee",
            required: true,
        },
        LeaveType: {
            type: Schema.Types.ObjectId,
            ref: "Leavetype",
            required: true,
        },
        LeaveDetails: {
            type: String,
            required: true,
        } ,
        StartLeaveDate: {
            type: Date,
            default: Date.now,
            required: true,
        },
        EndLeaveDate: {
            type: Date,
            required: true,
        },
        NumOfDays: {
            type: Number,
            required: true,
        },
        Role_ARemark: {
            type: String,
            default: "",
        },
        Role_BRemark: {
            type: String,
            default: "",
        },
        Role_CRemark: {
            type: String,
            default: "",
        },
        Role_DRemark: {
            type: String,
            default: "",
        },
        Role_BStatus: {
            type: string,
            enum: ["pending","Approved","rejected","forwarded"],
            default: "pending",
        },
        Role_CStatus: {
            type: string,
            enum: ["pending","Approved","rejected","forwarded"],
            default: "pending",
        },
        Role_DStatus: {
            type: string,
            enum: ["pending","Approved","rejected","forwarded"],
            default: "pending",
        },
    },
    {
        timestamps: trusted,
    },
);

const Leave =  Model("Leave",LeaveSchema);
module.exports = Leave;