console.log("starting server.js");

const express = require('express');
const server = express();


const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const morgan = require('morgan');
const AuthRoutes = require("./server/routes/AuthRoutes");
const EmployeeRoutes = require("./server/routes/EmployeeRoutes");
const DepartmentRoutes = require("./server/routes/DepartmentRoutes")
const connectDB = require("./server/config/db");

// const routes = require('./server/routes');


dotenv.config({ path: path.join(__dirname, "./.env") });// for loading environment  variables  from .env file.
const { DefaultErrorHandler,NotFoundError,} = require("./server/helpers/ErrorHandler");

const PORT = process.env.PORT || 8080;
const Department = require('./server/models/Department');
const Employee = require('./server/models/Employee'); 
// const Schema = mongoose.Schema;
// const Model = mongoose.model;
server.use(express.json()); 
// mongoose.connect('mongodb://localhost:27017/demo',{ useNewUrlParser: true})

//Default middleware implement
server.use(express.json({ limit: "50mb" }));
server.use(express.urlencoded({ extended: true }));
server.use(morgan("dev"));


//Connect to MongoDB
connectDB(process.env.MONGODB_CONNECTION_URL,{
  user: process.env.MONGODB_DATABASE_USERNAME,
  pass: process.env.MONGODB_DATABASE_PASSWORD,
  dbName: process.env.MONGODB_DATABASE_NAME,
  autoIndex: true,
  w: 'majority',
});



// Routing Implement
server.use("/api/v1/Auth", AuthRoutes);
server.use("/api/v1/Employee", EmployeeRoutes);
server.use("/api/v1/Department", DepartmentRoutes);
// server.use("/api/v1",routes);

//Not Found Error Handler
server.use(NotFoundError);


server.use(DefaultErrorHandler);



server.listen(PORT,() => 
    console.log(`example server is listening on port ${PORT}`)
);

module.exports = server;