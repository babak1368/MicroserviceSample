"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_config_1 = require("../ioc/inversify.config");
const user_1 = require("../domain/user");
const baseHandler_1 = __importDefault(require("./core/baseHandler"));
const loggerLoader_1 = __importDefault(require("../loaders/loggerLoader"));
class CustomerCreationMessageHandler extends baseHandler_1.default {
    handle(message) {
        const userRepository = inversify_config_1.myContainer.get("UserRepository");
        let newUser = new user_1.User();
        newUser.userName = message.customerCode;
        newUser.mobile = message.customerCode;
        newUser.customerCode = message.customerCode;
        newUser.firstName = message.firstName;
        newUser.lastName = message.lastName;
        newUser.registerDate = new Date();
        newUser.isActive = true;
        userRepository.add(newUser).then(result => {
            if (result.id != 0) {
                // successful
            }
            else {
                // failed
            }
        }).catch((error) => loggerLoader_1.default.getInstance().error(error));
    }
    ;
}
exports.default = CustomerCreationMessageHandler;
//# sourceMappingURL=customerCreationMessageHandler.js.map