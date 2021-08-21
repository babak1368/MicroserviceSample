import { Logger, ILogObject } from "tslog";
import { appendFileSync } from "fs";
export default class HooryLogger extends Logger {
  private static instance: HooryLogger;

  private constructor() {
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

  logToTransport(logObject: ILogObject) {
    appendFileSync("log.log", JSON.stringify(logObject) + "\n");
  }

  public static getInstance(): HooryLogger {
    if (!HooryLogger.instance) {
      HooryLogger.instance = new HooryLogger();
    }
    return HooryLogger.instance;
  }
}
