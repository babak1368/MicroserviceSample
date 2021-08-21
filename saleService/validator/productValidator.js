const validator = require('validator');

const validateCreate = function (req, res, next) {
  const data = req.body;
  let customeMessage;

  validator.isEmpty(data['title']);
  validator.isEmpty(data['brand']);
  validator.isEmpty(data['category']);
  // Something ELSE,   Added by Babak

  if (customeMessage) return res.send(customeMessage).status(400);
  next();
};

const validateUpdate = function (req, res, next) {
  let customeMessage;

  // Bussiness validations                    // Added by babak

  if (customeMessage) return res.send(customeMessage).status(400);
  next();
};

const validateDelete = function (req, res, next) {
  let customeMessage;

  // Bussiness validations                    // Added by babak

  if (customeMessage) return res.send(customeMessage).status(400);
  next();
};

module.exports = {
  validateCreate,
  validateUpdate,
  validateDelete,
};
