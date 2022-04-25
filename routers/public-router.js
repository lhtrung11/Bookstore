const express = require("express");
const public = require("../controllers/public-controller");

const Router = express.Router();

Router.route("/home").get(public.home);
Router.route("/search").get(public.search);
Router.route("/bookstores/:bookstoreId").get(public.visitBookstore);

module.exports = Router;
