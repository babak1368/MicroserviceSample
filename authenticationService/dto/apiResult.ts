export default class ApiResult {
  value: any;
  success: boolean;
  errorOriginalText: string;
  errorCode: number | null;
  text: string;

  static ok(value: any = null): ApiResult {
    return {
      value: value,
      success: true,
      text: "Successful",
    } as ApiResult;
  }

  static error(error: string = null): ApiResult {
    return {
      value: null,
      success: false,
      text: error,
    } as ApiResult;
  }

  static dbError(dbErrorText: string): ApiResult {
    return {
      value: null,
      success: false,
      text: "Error in Db",
      errorOriginalText: dbErrorText,
    } as ApiResult;
  }
}
