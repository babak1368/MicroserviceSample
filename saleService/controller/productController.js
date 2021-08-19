const productRepository = require("../dataAccess/productRepository");

listHandler = async function (request, response) {
    try {
        let result = await productRepository.getAll();
        return response.json(result).status(200);
    }
    catch (error) {
        return response.send(error.message).status(500);
    }
}

createHandler = async function (request, response) {
    try {
        const data = request.body;

        let result = await productRepository.insert(data);
        return response.json(result).status(200);
    }
    catch (error) {
        return response.send(error.message).status(500);
    }
}

updateHandler = async function (request, response) {
    try {
        const data = request.body;

        let result = await productRepository.update({ code: data.code }, data);
        return response.json(result).status(200);
    }
    catch (error) {
        return response.send(error.message).status(500);
    }
}

deleteHandler = async function (request, response) {
    try {
        const data = request.body;

        let result = await productRepository.remove({ code: data.code });
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