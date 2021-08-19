const Invoice = require("../domain/invoice");
const { dbContext } = require("./dbContext");

const getModel = async function () {
    return (await dbContext()).model('Invoice', Invoice, 'Invoice');
}

const getAll = async function () {
    return (await getModel()).find({});
}

const getById = async function (id) {
    return (await getModel()).findOne({ _id: id });
}

const getByExpression = async function (filter) {
    return (await getModel()).find(filter);
}

const insert = async function (invoice) {
    return (await getModel()).create(invoice);
}

const update = async function (filter, invoice) {
    return (await getModel()).findOneAndUpdate(filter, invoice);
}

const remove = async function (filter) {
    return (await getModel()).findOneAndRemove(filter);
}

module.exports = {
    getAll,
    getById,
    getByExpression,
    insert,
    update,
    remove
}