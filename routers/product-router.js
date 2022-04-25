const express = require('express');
const {getProductInfo} = require('../controllers/product-controller');

const Router = express.Router();

Router.route('/:productId').get(getProductInfo);

module.exports = Router;