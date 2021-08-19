const invoiceController = require("../controller/invoiceController");
const invoiceValidator = require("../validator/invoiceValidator");

module.exports = (router) => {

    router.get('/invoice/list', invoiceController.listHandler);
    router.post('/invoice/create', invoiceValidator.validateCreate, invoiceController.createHandler);
    router.post('/invoice/update', invoiceValidator.validateUpdate, invoiceController.updateHandler);
    router.post('/invoice/delete', invoiceValidator.validateDelete, invoiceController.deleteHandler);
};
