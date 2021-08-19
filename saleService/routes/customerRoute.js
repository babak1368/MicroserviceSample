const customerController = require("../controller/customerController");
const customerValidator = require("../validator/customerValidator");

module.exports = (router) => {

    router.get('/customer/list', customerController.listHandler);
    router.post('/customer/create', customerValidator.validateCreate, customerController.createHandler);
    router.post('/customer/update', customerValidator.validateUpdate, customerController.updateHandler);
    router.post('/customer/delete', customerValidator.validateDelete, customerController.deleteHandler);
};
