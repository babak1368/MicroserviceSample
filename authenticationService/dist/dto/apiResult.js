"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiResult {
    static ok(value = null) {
        return {
            Value: value,
            Success: true,
            Text: 'Successful'
        };
    }
    static error(error = null) {
        return {
            Value: null,
            Success: false,
            Text: error
        };
    }
    static dbError(dbErrorText) {
        return {
            Value: null,
            Success: false,
            Text: 'Error in Db',
            ErrorOriginalText: dbErrorText
        };
    }
}
exports.default = ApiResult;
//# sourceMappingURL=apiResult.js.map