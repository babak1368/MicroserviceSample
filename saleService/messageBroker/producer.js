const mongoose = require('mongoose');

function sendToQueue(queueName, message, messageId, contentType) {

    try {
        let serilizedMessage = JSON.stringify(message);
        if (global.channel.sendToQueue(queueName, Buffer.from(serilizedMessage),
            {
                messageId: messageId ? messageId : mongoose.Types.ObjectId().toString(),
                contentType: contentType ? contentType : 'application/json'
            }))

            console.log(message);

        else console.log('sendToQueue failed');
    }

    catch (error) {
        console.log(error);
    }
}

module.exports = { sendToQueue };
