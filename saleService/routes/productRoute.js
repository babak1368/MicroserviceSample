const productController = require('../controller/productController');
const productValidator = require('../validator/productValidator');

module.exports = (router) => {
  router.get('/product', productController.listHandler);
  router.post(
    '/product',
    productValidator.validateCreate,
    productController.createHandler
  );
  router.patch(
    '/product',
    productValidator.validateUpdate,
    productController.updateHandler
  );
  router.delete(
    '/product',
    productValidator.validateDelete,
    productController.deleteHandler
  );
};
