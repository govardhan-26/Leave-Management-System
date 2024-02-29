const express = require('express');
const AuthControllers = require('../controllers/Auth/AuthControllers');


const AuthRoutes = express.Router();

// Define the route for the LoginUser endpoint
AuthRoutes.post('/LoginUser', AuthControllers.LoginUser);

module.exports = AuthRoutes;
