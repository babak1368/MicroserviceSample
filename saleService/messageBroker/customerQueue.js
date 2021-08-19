const name = 'CustomerQueue';
const options = { duarable: false };

function handler(error, queue) {
    // handle assertQueue callback
}

module.exports = {

    handler,
    name,
    options
}