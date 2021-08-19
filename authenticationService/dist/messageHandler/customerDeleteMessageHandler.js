"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_config_1 = require("../ioc/inversify.config");
const baseHandler_1 = __importDefault(require("./core/baseHandler"));
const loggerLoader_1 = __importDefault(require("../loaders/loggerLoader"));
class CustomerDeleteMessageHandler extends baseHandler_1.default {
    handle(message) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRepository = inversify_config_1.myContainer.get("UserRepository");
            const sameUser = yield userRepository.findOne({ customerCode: message.customerCode });
            if (!sameUser)
                return;
            userRepository.remove(sameUser).then(result => {
                if (result.id != 0) {
                    // successful
                }
                else {
                    // failed
                }
            }).catch((error) => loggerLoader_1.default.getInstance().error(error));
        });
    }
    ;
}
exports.default = CustomerDeleteMessageHandler;
//# sourceMappingURL=customerDeleteMessageHandler.js.map