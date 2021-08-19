import amqpcb from 'amqplib/callback_api';
import HooryLogger from '../loaders/loggerLoader';
import HandlerFactory from '../messageHandler/core/handlerFactory';
import Consumer from './consumer';


export default class CustomerConsumer implements Consumer {

   name: string = 'CustomerQueue';
   options: amqpcb.Options.Consume = <amqpcb.Options.Consume>{ noAck: true };

   public handler(message: amqpcb.Message) {

      try {
         if (message == null) {
            console.log('message is null');
            return;
         }
         if (message.properties.contentType !== 'application/json') {
            console.log('message is not JSON based');
            return;
         }

         console.log('PureMessage: ' + message.content);

         let jsonMessage = JSON.parse(message.content.toString());

         let handler = new HandlerFactory();
         handler.getHandler(jsonMessage.actionType).handle(jsonMessage);
      }

      catch (error) {
         HooryLogger.getInstance().error(error);
      }
   }
}