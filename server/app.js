console.log("starting server.js");

const express = require('express');
const server = express();


const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const morgan = require('morgan');
const AuthRoutes = require("./routes/AuthRoutes");
const EmployeeRoutes = require("./routes/EmployeeRoutes");
const connectDB = require("./config/db");

dotenv.config({ path: path.join(__dirname, "../.env") });// for loading environment  variables  from .env file.
const { DefaultErrorHandler,NotFoundError,} = require("./helpers/ErrorHandler");

const PORT = process.env.PORT || 8080;
const Department = require('./models/Department');
const Employee = require('./models/Employee'); 
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

//Not Found Error Handler
server.use(NotFoundError);


server.use(DefaultErrorHandler);



server.listen(PORT,() => 
    console.log(`example server is listening on port ${PORT}`)
);

module.exports = server;