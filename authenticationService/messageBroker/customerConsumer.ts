import amqpcb from "amqplib/callback_api";
import HooryLogger from "../loaders/loggerLoader";
import HandlerFactory from "../messageHandler/core/handlerFactory";
import Consumer from "./consumer";
export default class CustomerConsumer implements Consumer {
  name = "CustomerQueue";
  options: amqpcb.Options.Consume = <amqpcb.Options.Consume>{ noAck: true };

  public handler(message: amqpcb.Message) {
    try {
      if (message == null) {
        HooryLogger.getInstance().warn("message is null");
        return;
      }
      if (message.properties.contentType !== "application/json") {
        HooryLogger.getInstance().warn("message is not JSON based");
        return;
      }

      HooryLogger.getInstance().info("PureMessage: " + message.content);

      const jsonMessage = JSON.parse(message.content.toString());
      const handler = new HandlerFactory();
      handler.getHandler(jsonMessage.actionType).handle(jsonMessage);
    } catch (error) {
      HooryLogger.getInstance().error(error);
    }
  }
}
