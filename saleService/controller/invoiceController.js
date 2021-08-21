const invoiceRepository = require('../dataAccess/invoiceRepository');

const listHandler = async function (req, res) {
  try {
    let result = await invoiceRepository.getAll();
    return res.json(result).status(200);
  } catch (error) {
    return res.send(error.message).status(500);
  }
};

const createHandler = async function (req, res) {
  try {
    const data = req.body;

    let result = await invoiceRepository.insert(data);
    return res.json(result).status(200);
  } catch (error) {
    return res.send(error.message).status(500);
  }
};

const updateHandler = async function (request, res) {
  try {
    const data = req.body;

    let result = await invoiceRepository.update({ code: data.code }, data);
    return res.json(result).status(200);
  } catch (error) {
    return res.send(error.message).status(500);
  }
};

const deleteHandler = async function (request, res) {
  try {
    const data = req.body;

    let result = await invoiceRepository.remove({ code: data.code });
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
