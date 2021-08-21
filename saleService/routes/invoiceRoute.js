const invoiceController = require('../controller/invoiceController');
const invoiceValidator = require('../validator/invoiceValidator');

module.exports = (router) => {
  router.get('/invoice', invoiceController.listHandler);
  router.post(
    '/invoice',
    invoiceValidator.validateCreate,
    invoiceController.createHandler
  );
  router.patch(
    '/invoice',
    invoiceValidator.validateUpdate,
    invoiceController.updateHandler
  );
  router.delete(
    '/invoice',
    invoiceValidator.validateDelete,
    invoiceController.deleteHandler
  );
};
