const mongoose = require('mongoose');
const initilizer = require('./initilizer');

const sendToQueue = function (queueName, message, messageId, contentType) {
  try {
    let serilizedMessage = JSON.stringify(message);
    if (
      initilizer
        .getChannel()
        .sendToQueue(queueName, Buffer.from(serilizedMessage), {
          messageId: messageId
            ? messageId
            : mongoose.Types.ObjectId().toString(),
          contentType: contentType ? contentType : 'application/json',
        })
    )
      console.log(message);
    else console.log('sendToQueue failed');
  } catch (error) {
    console.log(error);
  }
};

module.exports = { sendToQueue };
