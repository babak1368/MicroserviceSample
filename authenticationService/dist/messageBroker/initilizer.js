"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const callback_api_1 = __importDefault(require("amqplib/callback_api"));
const config_1 = __importDefault(require("../config"));
const customerQueue_1 = __importDefault(require("./customerQueue"));
const loggerLoader_1 = __importDefault(require("../loaders/loggerLoader"));
class Initilizer {
    constructor() {
    }
    initilize() {
        callback_api_1.default.connect(config_1.default.messageBroker.url, (error, connection) => connection.createChannel(this.createChannelCallback));
    }
    createChannelCallback(error, channel) {
        try {
            let customerQueue = new customerQueue_1.default(channel);
            channel.assertQueue(customerQueue.name, { durable: false }, customerQueue.handler);
            // all queues will be added here 
        }
        catch (errpr) {
            loggerLoader_1.default.getInstance().error(error);
        }
    }
    static getInstance() {
        if (!Initilizer.instance) {
            Initilizer.instance = new Initilizer();
        }
        return Initilizer.instance;
    }
}
exports.default = Initilizer;
//# sourceMappingURL=initilizer.js.map