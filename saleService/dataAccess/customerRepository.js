const mongoose = require("mongoose");
const config = require("../config");
const Customer = require("../domain/customer");
const IntegrationOutbox = require("../domain/integrationOutbox");
const { dbContext } = require("./dbContext");

const getModel = async function () {
    return (await dbContext()).model('Customer', Customer, 'Customer');
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

const insert = async function (customer) {
    return (await getModel()).create(customer);
}

const update = async function (filter, customer) {
    return (await getModel()).findOneAndUpdate(filter, customer);
}

const remove = async function (filter) {
    return (await getModel()).findOneAndRemove(filter);
}

const insertWithIntegrationOutbox = async function (customer) {

    try {
        const context = await dbContext();
        const session = await context.startSession();
        session.startTransaction();

        const customerModel = context.model('Customer', Customer, 'Customer');
        let customerResult = await customerModel.create([customer], { session: session });


        if (customerResult) {
            let expirationTime = new Date(customer.registerDate);
            expirationTime.setMinutes(expirationTime.getMinutes() + config.expiration.customer);

            let integrationOutbox = {
                _id: mongoose.Types.ObjectId(),
                targetCollection: 'Customer',
                targetObjectId: customer._id,
                targetCode: customer.code,
                expireTime: expirationTime,
                deliveryAttempCount: 0,
                action:'Delete',
                isDone: false,
                registerDate: new Date()
            };

            var integrationOutboxModel = context.model('IntegrationOutbox', IntegrationOutbox, 'IntegrationOutbox');
            let integrationOutboxResult = await integrationOutboxModel.create([integrationOutbox], { session: session });
        }

        await session.commitTransaction();
        session.endSession();
        return true;
    }
    catch (error) {
        console.log(error);
        return false;
    }

}

const deleteCustomerAndLogTheEvent = async function (expiredItem) {

    try {
        const context = await dbContext();
        const session = await context.startSession();
        session.startTransaction();

        const customerModel = context.model('Customer', Customer, 'Customer');
        let customerResult = await customerModel.deleteOne({ _id: expiredItem.targetObjectId }, { session: session });

        const integrationOutboxModel = context.model('IntegrationOutbox', IntegrationOutbox, 'IntegrationOutbox');
        let integrationOutboxResult = await integrationOutboxModel.updateOne(
            { _id: expiredItem._id },
            { isDone: true },
            { session: session });

        await session.commitTransaction();
        session.endSession();
        return true;
    }
    catch (error) {
        console.log(error);
        return false;
    }

}


module.exports = {
    getAll,
    getById,
    getByExpression,
    insert,
    update,
    remove,
    insertWithIntegrationOutbox,
    deleteCustomerAndLogTheEvent
}