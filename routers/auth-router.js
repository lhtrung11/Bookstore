const express = require('express');
const {login, register} = require('../controllers/auth-controller');

const Router = express.Router();

Router.route('/register/:type').post(register);
Router.route('/login').post(login);

module.exports = Router;