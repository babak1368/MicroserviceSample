"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRoute_1 = __importDefault(require("./userRoute"));
exports.default = () => {
    const router = express_1.Router();
    userRoute_1.default(router);
    return router;
};
//# sourceMappingURL=index.js.map