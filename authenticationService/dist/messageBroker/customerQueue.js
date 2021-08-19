"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const customerConsumer_1 = __importDefault(require("./customerConsumer"));
const loggerLoader_1 = __importDefault(require("../loaders/loggerLoader"));
class CustomerQueue {
    constructor(channel) {
        this.channel = channel;
        this.name = 'CustomerQueue';
        this.options = { duarable: false };
        this.handler.apply(this);
    }
    handler(error, channel) {
        try {
            let customerConsumer = new customerConsumer_1.default();
            this.channel.consume(customerConsumer.name, customerConsumer.handler, customerConsumer.options);
        }
        catch (error) {
            loggerLoader_1.default.getInstance().error(error);
        }
    }
}
exports.default = CustomerQueue;
//# sourceMappingURL=customerQueue.js.map