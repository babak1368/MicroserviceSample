const producer = require('./producer');

const name = 'CustomerQueue';

const sendCreationMessageAcrossTheNodes = function (customer) {
  try {
    let customerCreationMessage = {
      actionType: 'CustomerCreation',
      customerCode: customer.code,
      firstName: customer.firstName,
      lastName: customer.lastName,
    };

    producer.sendToQueue(name, customerCreationMessage);
  } catch (error) {
    console.log(error);
  }
};

const sendDeleteMessageAcrossTheNodes = function (integrationOutbox) {
  try {
    let customerDeleteMessage = {
      actionType: 'CustomerDelete',
      customerCode: integrationOutbox.targetCode,
    };

    producer.sendToQueue(
      name,
      customerDeleteMessage,
      integrationOutbox._id.toString()
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  sendCreationMessageAcrossTheNodes,
  sendDeleteMessageAcrossTheNodes,
};
