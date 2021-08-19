"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const customerDeleteMessageHandler_1 = __importDefault(require("../../messageHandler/customerDeleteMessageHandler"));
const customerCreationMessageHandler_1 = __importDefault(require("../../messageHandler/customerCreationMessageHandler"));
class HandlerFactory {
    getHandler(messageType) {
        if (messageType === "CustomerCreation") {
            return new customerCreationMessageHandler_1.default();
        }
        else if (messageType === "CustomerDelete") {
            return new customerDeleteMessageHandler_1.default();
        }
    }
}
exports.default = HandlerFactory;
// this is factory method dessign pattern
// added by babak
//# sourceMappingURL=handlerFactory.js.map