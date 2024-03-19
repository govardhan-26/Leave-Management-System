console.log("starting employee.js");
const { model, Schema } = require('mongoose');
const EmployeeSchema = new Schema(
    {
        DepartmentId: {
            type: Schema.Types.ObjectId,
            ref: "Department",
            // required: true,
        },
        FirstName: {
            type: String,
            required: true,
        },
        LastName: {
            type: String,
            required: true,
        },
        Gender: {
            type: String,
            required: true,
        },
        DateOfBirth: {
            type: String,
            required: true,
        },
        Address: {
            type: String,
            required: true,
        },
        Phone: {
            type: Number,
            required: true,
            validate: {
                validator: function(v) {
                    return /^[0-9]{10}$/.test(v);
                },
                message: (prop) => `${prop.value} is not a valid phone number!`,
            },
            unique: true,
        },
        Email: {
            type: String,
            required: true,
            validate: {
                validator: function(v){
                    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
                },
                message: (prop) => `${prop.value} is an invalid email address`,
            },
            unique: true,
        },
        Password: {
            type: String,
            required: true,
            minlength: 8,
        },
        Roles: {
            type: String,
            enum: ["Role_A","Role_B","Role_C","Role_D","Admin"],
            default: "Role_A",
            required: true,
        },
        Image: {
            type: String,
        },
        token: {
            type: String,
        },
    },
    {
        timestamps: true,
    },
);
const Employee =  model("Employee",EmployeeSchema);
module.exports = Employee;