"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_cache_1 = __importDefault(require("node-cache"));
const myCache = new node_cache_1.default({ stdTTL: 0, checkperiod: 0 });
class CacheProvider {
    static set(key, value) {
        myCache.set(key, value);
    }
    static get(key) {
        let result = myCache.get(key);
        return result;
    }
    static delete(key) {
        myCache.del(key);
    }
}
exports.default = CacheProvider;
// utility class for caching, Is implemeneted by babak
//# sourceMappingURL=cacheProvider.js.map