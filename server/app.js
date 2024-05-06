console.log("starting server.js");

const express = require('express');
const server = express();
const cors = require('cors');

server.use(cors());


const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const morgan = require('morgan');

const AuthRoutes = require("./routes/AuthRoutes");
const EmployeeRoutes = require("./routes/EmployeeRoutes");
const DepartmentRoutes = require("./routes/DepartmentRoutes");
const LeaveTypeRoutes = require("./routes/LeaveTypeRoutes");
const LeaveRoutes = require("./routes/LeaveRoutes");

const connectDB = require("./config/db");

// const routes = require('./routes');


dotenv.config();// for loading environment  variables  from .env file.
const { DefaultErrorHandler,NotFoundError,} = require("./helpers/ErrorHandler");

const PORT = process.env.PORT || 8080;
const Department = require('./models/Department');
const Employee = require('./models/Employee'); 
// const DepartmentRoutes = require('./routes/DepartmentRoutes');
// const Schema = mongoose.Schema;
// const Model = mongoose.model;
server.use(express.json()); 
// mongoose.connect('mongodb://localhost:27017/demo',{ useNewUrlParser: true})

//Default middleware implement
server.use(express.json({ limit: "50mb" }));
server.use(express.urlencoded({ extended: true }));
server.use(morgan("dev"));


//Connect to MongoDB
connectDB();



// Routing Implement
server.use("/api/v1/Auth", AuthRoutes);
server.use("/api/v1/Employee", EmployeeRoutes);
server.use("/api/v1/Department", DepartmentRoutes);
server.use("/api/v1/LeaveType", LeaveTypeRoutes);
server.use("/api/v1/Leave",LeaveRoutes);

// server.use("/api/v1",routes);

//Not Found Error Handler
server.use(NotFoundError);


server.use(DefaultErrorHandler);



server.listen(PORT,() => 
    console.log(`example server is listening on port ${PORT}`)
);

module.exports = server;