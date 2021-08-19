"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_config_1 = require("../ioc/inversify.config");
const userValidator_1 = __importDefault(require("../validator/userValidator"));
exports.default = (router) => {
    const controller = inversify_config_1.myContainer.get("UserController");
    ; // new UserController();
    var validator = new userValidator_1.default();
    router.post('/user/login', validator.validateLogin, controller.loginPostHandler);
    router.post('/user/create', validator.validateCreate, controller.createPostHandler);
};
// the authenticationJWT as a middleware can be used here, exactly between the request and handler.
// this also added by babak
//# sourceMappingURL=userRoute.js.map