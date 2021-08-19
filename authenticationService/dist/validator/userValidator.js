"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = __importDefault(require("validator"));
class UserValidator {
    validateLogin(request, response, next) {
        const data = request.body;
        let customeMessage;
        validator_1.default.isEmpty(data['userName']);
        // Something ELSE,   Added by Babak 
        if (customeMessage)
            return response.send(customeMessage).status(400);
        next();
    }
    validateCreate(request, response, next) {
        const data = request.body;
        let customeMessage;
        // Bussiness validations                    // Added by babak
        if (customeMessage)
            return response.send(customeMessage).status(400);
        next();
    }
    validateUpdate(request, response, next) {
        const data = request.body;
        let customeMessage;
        // Bussiness validations                    // Added by babak
        if (customeMessage)
            return response.send(customeMessage).status(400);
        next();
    }
    validateDelete(request, response, next) {
        const data = request.body;
        let customeMessage;
        // Bussiness validations                    // Added by babak
        if (customeMessage)
            return response.send(customeMessage).status(400);
        next();
    }
}
exports.default = UserValidator;
//# sourceMappingURL=userValidator.js.map