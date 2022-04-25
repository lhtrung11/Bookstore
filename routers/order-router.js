const express = require('express');
const {home, search} = require('../controllers/order-controller');

const Router = express.Router();

Router.route('/home').get(home);
Router.route('/search').get(search);

module.exports = Router;