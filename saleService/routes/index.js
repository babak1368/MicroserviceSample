const Router = require("express");
const customerRoute = require("./customerRoute");
const invoiceRoute = require("./invoiceRoute");
const productRoute = require("./productRoute");

module.exports = () => {
    const router = Router();
    productRoute(router);
    customerRoute(router); 
    invoiceRoute(router);
    return router;
}

