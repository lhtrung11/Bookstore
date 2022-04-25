const authRoute = require('./auth-router');
const bookstoreRoute = require('./bookstore-router');
const customerRoute = require('./customer-router');
const orderRoute = require('./order-router');
const productRoute = require('./product-router');
const publicRoute = require('./public-router');

Route = (app) => {
    app.use('/auth', authRoute);
    app.use('/bookstore', bookstoreRoute);
    app.use('/customer', customerRoute);
    app.use('/order', orderRoute);
    app.use('/product', productRoute);
    app.use('/', publicRoute);
}

module.exports = Route;

