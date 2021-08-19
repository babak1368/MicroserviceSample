
import amqpcb from 'amqplib/callback_api';

export default interface Queue {

    name: string;
    options: any;
    handler(error: any, channel: amqpcb.Replies.AssertQueue): void;
}