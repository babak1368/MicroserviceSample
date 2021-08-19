const amqpcb = require('amqplib/callback_api');
const config = require('../config');
const customerQueue = require('./customerQueue');

function initilize() {
    amqpcb.connect(config.messageBroker.url, (error, connection) => connection.createChannel(createChannelCallback));
}


function createChannelCallback(error, channel) {
    try {

        channel.assertQueue(customerQueue.name, { durable: false });
        global.channel = channel;

        // all queues will be added here 

    }
    catch (errpr) {
        console.log(error);
    }
}

module.exports = {
    initilize
}