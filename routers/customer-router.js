const express = require("express");
const customer = require("../controllers/customer-controller");
const verifyToken = require("../middlewares/verifyToken");

const Router = express.Router();

Router.route("/")
    .get(verifyToken, customer.getCustomer)
    .put(verifyToken, customer.updateCustomer);
Router.route("/:productId").put(verifyToken, customer.deleteFavourite);
Router.route("/following").get(verifyToken, customer.showFollowing);
Router.route("/following/:bookstoreId").put(
    verifyToken,
    customer.deleteFollowing
);
Router.route("/cart")
    .get(verifyToken, customer.showCart)
    .post(verifyToken, customer.makeOrder);
Router.route("/cart/:productId").put(verifyToken, customer.updateCart);
Router.route("/purchases").get(verifyToken, customer.getPurchases);
Router.route("/purchases/:orderId").put(verifyToken, customer.completePurchase);
Router.route("/history").get(verifyToken, customer.showHistory);
Router.route("/history/:orderId").put(verifyToken, customer.sendReview);

module.exports = Router;
