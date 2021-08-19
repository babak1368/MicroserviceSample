"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.myContainer = void 0;
require("reflect-metadata");
const inversify_1 = require("inversify");
const entityBase_1 = __importDefault(require("../domain/entityBase"));
const typeorm_1 = require("typeorm");
const repositoryBase_1 = __importDefault(require("../dataAccess/core/repositoryBase"));
const userRepository_1 = require("../dataAccess/userRepository");
const userController_1 = __importDefault(require("../controller/userController"));
const myContainer = new inversify_1.Container();
exports.myContainer = myContainer;
myContainer.bind("RepositoryBase").to(repositoryBase_1.default);
myContainer.bind("TEntity").to(entityBase_1.default);
myContainer.bind("Repository<T>").to(typeorm_1.Repository);
myContainer.bind("UserRepository").to(userRepository_1.UserRepository);
myContainer.bind("UserController").to(userController_1.default);
//# sourceMappingURL=inversify.config.js.map