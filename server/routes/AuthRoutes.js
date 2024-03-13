const AuthRoutes = require('express').Router();
const AuthControllers = require('../controllers/Auth/AuthControllers');

// Define the route for the LoginUser endpoint
AuthRoutes.post('/LoginUser', AuthControllers.LoginUser);

module.exports = AuthRoutes;
