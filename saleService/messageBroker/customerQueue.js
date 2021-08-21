const name = 'CustomerQueue';
const options = { duarable: false };

const handler = function () {
  // handle assertQueue callback
};

module.exports = {
  handler,
  name,
  options,
};
