import CustomerDeleteMessageHandler from "../../messageHandler/customerDeleteMessageHandler";
import CustomerCreationMessageHandler from "../../messageHandler/customerCreationMessageHandler";
import BaseHandler from "./baseHandler";
export default class HandlerFactory {
  public getHandler(messageType: string): BaseHandler {
    if (messageType === "CustomerCreation") {
      return new CustomerCreationMessageHandler();
    } else if (messageType === "CustomerDelete") {
      return new CustomerDeleteMessageHandler();
    }
  }
}
