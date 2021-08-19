const invoiceRepository = require("../dataAccess/invoiceRepository");


listHandler = async function (request, response) {
    try {
         
        let result = await invoiceRepository.getAll();
        return response.json(result).status(200);

    }
    catch (error) {
        return response.send(error.message).status(500);
    }
}

createHandler = async function (request, response) {
    try {
        const data = request.body;

        let result = await invoiceRepository.insert(data);
        return response.json(result).status(200);
    }
    catch (error) {
        return response.send(error.message).status(500);
    }
}

updateHandler = async function (request, response) {
    try {
        const data = request.body;

        let result = await invoiceRepository.update({ code: data.code }, data);
        return response.json(result).status(200);
    }
    catch (error) {
        return response.send(error.message).status(500);
    }
}

deleteHandler = async function (request, response) {
    try {
        const data = request.body;

        let result = await invoiceRepository.remove({ code: data.code });
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