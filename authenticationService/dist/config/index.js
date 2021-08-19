"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
process.env.NODE_ENV = process.env.NODE_ENV || 'production';
const envFound = dotenv_1.default.config();
if (envFound.error) {
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
}
exports.default = {
    port: parseInt(process.env.PORT, 10),
    jwtSecret: process.env.JWT_SECRET,
    jwtAlgorithm: process.env.JWT_ALGO,
    database: {
        host: "localhost",
        port: 1433,
        username: "YourOwnUserName",
        password: "YourOwnPssword",
        database: "Authentication",
        migrationsRun: false,
        synchronize: false,
        logging: false
    },
    api: {
        prefix: '/api',
    },
    messageBroker: {
        url: 'amqp://<yourUser>:<yourPassword>@localhost'
    }
};
//# sourceMappingURL=index.js.map