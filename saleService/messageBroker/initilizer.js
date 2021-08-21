const amqpcb = require('amqplib/callback_api');
const config = require('../config');
const customerQueue = require('./customerQueue');

const initilize = function () {
  amqpcb.connect(config.messageBroker.url, (error, connection) =>
    connection.createChannel(createChannelCallback)
  );
};

const createChannelCallback = function (error, channel) {
  try {
    channel.assertQueue(customerQueue.name, { durable: false });
    global.channel = channel;
  } catch (errpr) {
    console.log(error);
  }
};

module.exports = {
  initilize,
};
