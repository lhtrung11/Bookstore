const express = require("express");
const bookstore = require("../controllers/bookstore-controller");
const { verifyToken } = require("../middlewares/verifyToken");
const Router = express.Router();

Router.route("/")
    .get(verifyToken, bookstore.getBookstore)
    .put(verifyToken, bookstore.updateBookstore);
Router.route("/item").post(verifyToken, bookstore.createProduct);
Router.route("/item/:productId")
    .put(bookstore.updateProduct)
    .delete(bookstore.deleteProduct);
Router.route("/history").get(verifyToken, bookstore.showHistory);
Router.route("/delivery").get(verifyToken, bookstore.getDelivery);
Router.route("/waiting").get(verifyToken, bookstore.getWaitingOrder);
Router.route("/waiting/:orderId").put(
    verifyToken,
    bookstore.updateWaitingOrder
);

module.exports = Router;
