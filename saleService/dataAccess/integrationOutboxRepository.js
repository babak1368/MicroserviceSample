const IntegrationOutbox = require('../domain/integrationOutbox');
const { dbContext } = require('./dbContext');

const getModel = async function () {
  return (await dbContext()).model(
    'IntegrationOutbox',
    IntegrationOutbox,
    'IntegrationOutbox'
  );
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

const insert = async function (integrationOutbox) {
  return (await getModel()).create(integrationOutbox);
};

const update = async function (filter, integrationOutbox) {
  return (await getModel()).findOneAndUpdate(filter, integrationOutbox);
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
