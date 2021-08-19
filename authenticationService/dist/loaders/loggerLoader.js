"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslog_1 = require("tslog");
const fs_1 = require("fs");
class HooryLogger extends tslog_1.Logger {
    constructor() {
        super();
        this.attachTransport({
            silly: this.logToTransport,
            debug: this.logToTransport,
            trace: this.logToTransport,
            info: this.logToTransport,
            warn: this.logToTransport,
            error: this.logToTransport,
            fatal: this.logToTransport,
        });
    }
    logToTransport(logObject) {
        fs_1.appendFileSync("log.log", JSON.stringify(logObject) + "\n");
    }
    static getInstance() {
        if (!HooryLogger.instance) {
            HooryLogger.instance = new HooryLogger();
        }
        return HooryLogger.instance;
    }
}
exports.default = HooryLogger;
//# sourceMappingURL=loggerLoader.js.map