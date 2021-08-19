const validator = require("validator");

const validateCreate = function (request, response, next) {
    const data = request.body;
    let customeMessage;

    validator.isEmpty(data['firstName']);
    validator.isEmpty(data['lastName']);
    // Something ELSE,   Added by Babak 


    if (customeMessage)
        return response.send(customeMessage).status(400);
    next();
}

const validateUpdate = function (request, response, next) {
    const data = request.body;
    let customeMessage;

    // Bussiness validations                    // Added by babak

    if (customeMessage)
        return response.send(customeMessage).status(400);
    next();
}

const validateDelete = function (request, response, next) {
    const data = request.body;
    let customeMessage;

    // Bussiness validations                    // Added by babak

    if (customeMessage)
        return response.send(customeMessage).status(400);
    next();
}

module.exports = {
    validateCreate,
    validateUpdate,
    validateDelete
};