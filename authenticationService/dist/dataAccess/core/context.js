"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const user_1 = require("../../domain/user");
const role_1 = require("../../domain/role");
const config_1 = __importDefault(require("../../config"));
const Context = typeorm_1.createConnection({
    type: "mssql",
    host: config_1.default.database.host,
    port: config_1.default.database.port,
    username: config_1.default.database.username,
    password: config_1.default.database.password,
    database: config_1.default.database.database,
    migrationsRun: false,
    entities: [
        user_1.User,
        role_1.Role,
    ],
    synchronize: false,
    logging: true
});
exports.default = Context;
//# sourceMappingURL=context.js.map