import amqpcb from 'amqplib/callback_api';
import CustomerConsumer from './customerConsumer';
import Queue from './queue';
import HooryLogger from '../loaders/loggerLoader';

export default class CustomerQueue implements Queue {

   name: string = 'CustomerQueue';
   options: any = { duarable: false };

   constructor(private channel: amqpcb.Channel) {
      this.handler.apply(this);
   }

   public handler(error: any, channel: amqpcb.Replies.AssertQueue) {
      try {
         let customerConsumer = new CustomerConsumer();
         this.channel.consume(customerConsumer.name, customerConsumer.handler, customerConsumer.options);
      }

      catch (error) {
         HooryLogger.getInstance().error(error);
      }
   }

}