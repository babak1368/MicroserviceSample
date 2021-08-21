const customerController = require('../controller/customerController');
const customerValidator = require('../validator/customerValidator');

module.exports = (router) => {
  router.get('/customer', customerController.listHandler);
  router.post(
    '/customer',
    customerValidator.validateCreate,
    customerController.createHandler
  );
  router.patch(
    '/customer',
    customerValidator.validateUpdate,
    customerController.updateHandler
  );
  router.delete(
    '/customer',
    customerValidator.validateDelete,
    customerController.deleteHandler
  );
};
