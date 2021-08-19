const expressLoader = require("./expressLoader");
const messageBrokerLoader = require("./messageBrokerLoader");
const scheduledJobLoader = require("./scheduledJobLoader");

module.exports = async (app) => {
    await expressLoader(app);
    messageBrokerLoader();
    scheduledJobLoader();
};
