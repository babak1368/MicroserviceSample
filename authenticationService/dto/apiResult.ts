
export default class ApiResult {

    Value: any;
    Success: boolean;
    ErrorOriginalText: string;
    ErrorCode: number | null;
    Text: string;

    static ok(value: any = null): ApiResult {
        return {
            Value: value,
            Success: true,
            Text: 'Successful'
        } as ApiResult;
    }

    static error(error: string = null): ApiResult {
        return {
            Value: null,
            Success: false,
            Text: error
        } as ApiResult;
    }

    static dbError(dbErrorText: string ): ApiResult {
        return {
            Value: null,
            Success: false,
            Text: 'Error in Db',
            ErrorOriginalText: dbErrorText
        } as ApiResult;
    }
}