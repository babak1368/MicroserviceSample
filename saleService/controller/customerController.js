const mongoose = require("mongoose");
const customerRepository = require("../dataAccess/customerRepository");
const customerProducer = require("../messageBroker/customerProducer");

listHandler = async function (request, response) {
    try {
        let result = await customerRepository.getAll();
        return response.json(result).status(200);
    }
    catch (error) {
        return response.send(error.message).status(500);
    }
}

createHandler = async function (request, response) {
    try {
        const data = request.body;
        data._id = mongoose.Types.ObjectId();
        data.registerDate = new Date();
        data.code = Math.round(Math.random() * 999999888); ///  added by babak, for test, we want code to be unique. it is assume
        data.isDeleted = false;
        data.firstName += data.code;  // FOR MAKE THE field UNIQIE to understand scenario
        data.lastName += data.code;   // FOR MAKE THE field UNIQIE to understand scenario

        //let result = await customerRepository.insert(data);
        let result = await customerRepository.insertWithIntegrationOutbox(data);

        if (result) customerProducer.sendCreationMessageAcrossTheNodes(data);   // pushing across the nodes / added by babak 

        return response.json(result).status(200);
    }
    catch (error) {
        return response.send(error.message).status(500);
    }
}

updateHandler = async function (request, response) {
    try {
        const data = request.body;

        let result = await customerRepository.update({ code: data.code }, data);
        return response.json(result).status(200);
    }
    catch (error) {
        return response.send(error.message).status(500);
    }
}

deleteHandler = async function (request, response) {
    try {
        const data = request.body;

        let result = await customerRepository.remove({ code: data.code });
        return response.json(result).status(200);
    }
    catch (error) {
        return response.send(error.message).status(500);
    }
}


module.exports = {
    listHandler,
    createHandler,
    updateHandler,
    deleteHandler
}