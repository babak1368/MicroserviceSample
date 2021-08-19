const mongoose = require('mongoose');
const producer = require('./producer');
const name = 'CustomerQueue';

const options = { deliveryMode: 1 };

function sendCreationMessageAcrossTheNodes(customer) {

    try {
        let customerCreationMessage = {
            actionType: 'CustomerCreation',
            customerCode: customer.code,
            firstName: customer.firstName,
            lastName: customer.lastName
        };

        producer.sendToQueue(name, customerCreationMessage);
    }

    catch (error) {
        console.log(error);
    }
}


function sendDeleteMessageAcrossTheNodes(integrationOutbox) {

    try {
        let customerDeleteMessage = {
            actionType: 'CustomerDelete',
            customerCode: integrationOutbox.targetCode,
        };

        producer.sendToQueue(name, customerDeleteMessage, integrationOutbox._id.toString());
    }

    catch (error) {
        console.log(error);
    }
}


module.exports = {
    sendCreationMessageAcrossTheNodes,
    sendDeleteMessageAcrossTheNodes
};
