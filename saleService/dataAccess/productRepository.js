const Product = require('../domain/product');
const { dbContext } = require('./dbContext');

const getModel = async function () {
  return (await dbContext()).model('Product', Product, 'Product');
};

const getAll = async function () {
  return (await getModel()).find({});
};

const getById = async function (id) {
  return (await getModel()).findOne({ _id: id });
};

const getByExpression = async function (filter) {
  return (await getModel()).find(filter);
};

const insert = async function (product) {
  return (await getModel()).create(product);
};

const update = async function (filter, product) {
  return (await getModel()).findOneAndUpdate(filter, product);
};

const remove = async function (filter) {
  return (await getModel()).findOneAndRemove(filter);
};

module.exports = {
  getAll,
  getById,
  getByExpression,
  insert,
  update,
  remove,
};
