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
const expressLoader_1 = __importDefault(require("./expressLoader"));
const cacheLoader_1 = __importDefault(require("./cacheLoader"));
const messageBrokerLoader_1 = __importDefault(require("./messageBrokerLoader"));
exports.default = ({ expressApp }) => __awaiter(void 0, void 0, void 0, function* () {
    yield expressLoader_1.default({ app: expressApp });
    yield cacheLoader_1.default({ app: expressApp });
    yield messageBrokerLoader_1.default();
});
//# sourceMappingURL=index.js.map