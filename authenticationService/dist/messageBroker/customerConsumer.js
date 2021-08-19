"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const loggerLoader_1 = __importDefault(require("../loaders/loggerLoader"));
const handlerFactory_1 = __importDefault(require("../messageHandler/core/handlerFactory"));
class CustomerConsumer {
    constructor() {
        this.name = 'CustomerQueue';
        this.options = { noAck: true };
    }
    handler(message) {
        try {
            if (message == null) {
                console.log('message is null');
                return;
            }
            if (message.properties.contentType !== 'application/json') {
                console.log('message is not JSON based');
                return;
            }
            console.log('PureMessage: ' + message.content);
            let jsonMessage = JSON.parse(message.content.toString());
            let handler = new handlerFactory_1.default();
            handler.getHandler(jsonMessage.actionType).handle(jsonMessage);
        }
        catch (error) {
            loggerLoader_1.default.getInstance().error(error);
        }
    }
}
exports.default = CustomerConsumer;
//# sourceMappingURL=customerConsumer.js.map