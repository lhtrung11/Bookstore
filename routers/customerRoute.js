const { Route } = require('express');
const express = require('express');
const {getCustomerProfile, updateCustomerProfile} = require('../controllers/customerController');

const Router = express.Router();

Router.route('/customer').get(getCustomerProfile).put(updateCustomerProfile);

module.exports = Router;