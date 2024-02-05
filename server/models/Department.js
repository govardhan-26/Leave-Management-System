const { model, Schema } = require('mongoose');

const DepartmentSchema = new Schema(
    {
        DepartmentName: {
            type: String,
            required: true,
            unique: true,
        },
        DepartmentShortName: {
            type: String,
            required: true,
            unique: true,
        },
        DepartmentDetails: {
            type: String,
        },
        DepartmentStatus: {
            type: Boolean,
        },
    },
    {
        timestamps: true
    },
);

const Department = model("Department", DepartmentSchema);
module.exports = Department;
