import amqpcb from 'amqplib/callback_api';
import config from '../config';
import CustomerQueue from './customerQueue';
import Queue from './queue';
import HooryLogger from '../loaders/loggerLoader';
export default class Initilizer {
  private static instance: Initilizer;

  public initilize(): void {
    amqpcb.connect(
      config.messageBroker.url,
      (error: any, connection: amqpcb.Connection) =>
        connection.createChannel(this.createChannelCallback)
    );
  }

  private createChannelCallback(error: any, channel: amqpcb.Channel): void {
    try {
      const customerQueue: Queue = new CustomerQueue(channel);
      channel.assertQueue(
        customerQueue.name,
        { durable: false },
        customerQueue.handler
      );
    } catch (errpr) {
      HooryLogger.getInstance().error(error);
    }
  }

  public static getInstance(): Initilizer {
    if (!Initilizer.instance) {
      Initilizer.instance = new Initilizer();
    }

    return Initilizer.instance;
  }
}
