import amqpcb from 'amqplib/callback_api';

export default interface Consumer {

    name: string;
    options: amqpcb.Options.Consume;
    handler(message: amqpcb.Message): void;

}