const mongoose = require('mongoose');
const customerRepository = require('../dataAccess/customerRepository');
const customerProducer = require('../messageBroker/customerProducer');

const listHandler = async function (req, res) {
  try {
    let result = await customerRepository.getAll();
    return res.json(result).status(200);
  } catch (error) {
    return res.send(error.message).status(500);
  }
};

const createHandler = async function (req, res) {
  try {
    const data = req.body;
    data._id = mongoose.Types.ObjectId();
    data.registerDate = new Date();
    data.code = Math.round(Math.random() * 999999888);
    data.isDeleted = false;
    data.firstName += data.code;
    data.lastName += data.code;

    let result = await customerRepository.insertWithIntegrationOutbox(data);
    if (result) customerProducer.sendCreationMessageAcrossTheNodes(data);

    return res.json(result).status(200);
  } catch (error) {
    return res.send(error.message).status(500);
  }
};

const updateHandler = async function (req, res) {
  try {
    const data = req.body;

    let result = await customerRepository.update({ code: data.code }, data);
    return res.json(result).status(200);
  } catch (error) {
    return res.send(error.message).status(500);
  }
};

const deleteHandler = async function (req, res) {
  try {
    const data = req.body;
    let result = await customerRepository.remove({ code: data.code });
    return res.json(result).status(200);
  } catch (error) {
    return res.send(error.message).status(500);
  }
};

module.exports = {
  listHandler,
  createHandler,
  updateHandler,
  deleteHandler,
};
