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
const cacheProvider_1 = __importDefault(require("../utility/cacheProvider"));
exports.default = ({ app }) => __awaiter(void 0, void 0, void 0, function* () {
    const cacheSampleData = () => __awaiter(void 0, void 0, void 0, function* () {
        let someData = { target: 'Test', author: 'Babak.Davoodi' };
        cacheProvider_1.default.set('sampleCacheKey', someData);
    });
    const cacheSomethingElse = () => __awaiter(void 0, void 0, void 0, function* () {
        // Do your own operations
    });
    cacheSampleData();
    cacheSomethingElse();
});
// all cached item will be managed here 
// added by babak
//# sourceMappingURL=cacheLoader.js.map