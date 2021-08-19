const productController = require("../controller/productController");
const productValidator = require("../validator/productValidator");

module.exports = (router) => {

    router.get('/product/list', productController.listHandler);
    router.post('/product/create', productValidator.validateCreate, productController.createHandler);
    router.post('/product/update', productValidator.validateUpdate, productController.updateHandler);
    router.post('/product/delete', productValidator.validateDelete, productController.deleteHandler);
};
