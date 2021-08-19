"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
const inversify_1 = require("inversify");
const inversify_config_1 = require("../ioc/inversify.config");
const controllerBase_1 = __importDefault(require("./controllerBase"));
const user_1 = require("../domain/user");
const apiResult_1 = __importDefault(require("../dto/apiResult"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const crypto_1 = __importDefault(require("crypto"));
const config_1 = __importDefault(require("../config"));
const loggerLoader_1 = __importDefault(require("../loaders/loggerLoader"));
let UserController = class UserController extends controllerBase_1.default {
    constructor() {
        super();
    }
    loginGetHandler(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            response.json({ user: 'userBABAk' }).status(200);
        });
    }
    loginPostHandler(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = request.body;
            const userRepository = inversify_config_1.myContainer.get("UserRepository");
            const sameUser = yield userRepository.findOne({ userName: user.userName });
            if (!sameUser) {
                response.json(apiResult_1.default.error('Not Found'));
                return;
            }
            const arrayedPassword = new TextEncoder().encode(user.stringPassword);
            const hashedPassword = crypto_1.default.createHash('md5').update(arrayedPassword).digest();
            if (hashedPassword.compare(sameUser.password) !== 0) {
                response.json(apiResult_1.default.error('Not Found'));
                return;
            }
            const token = jsonwebtoken_1.default.sign({
                userId: sameUser.id,
                firstName: sameUser.firstName,
                lastName: sameUser.lastName,
            }, config_1.default.jwtSecret);
            response.json(token).status(200);
        });
    }
    createPostHandler(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = req.body;
            const userRepository = inversify_config_1.myContainer.get("UserRepository");
            let newUser = new user_1.User();
            newUser.userName = user.userName;
            newUser.mobile = user.mobile;
            newUser.customerCode = -1;
            newUser.registerDate = new Date();
            newUser.isActive = true;
            userRepository.add(newUser).then(result => {
                if (result.id != 0) {
                    res.json(apiResult_1.default.ok()).status(200);
                    return;
                }
            }).catch((error) => loggerLoader_1.default.getInstance().error(error));
            return;
        });
    }
};
UserController = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], UserController);
exports.default = UserController;
//# sourceMappingURL=userController.js.map