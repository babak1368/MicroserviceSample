import { myContainer } from '../ioc/inversify.config';
import { User } from '../domain/user';
import BaseHandler from './core/baseHandler';
import { UserRepository } from '../dataAccess/userRepository';
import HooryLogger from '../loaders/loggerLoader';

export default class CustomerCreationMessageHandler extends BaseHandler {

    public handle(message: any) {

        const userRepository = myContainer.get<UserRepository>("UserRepository");

        let newUser = new User();
        newUser.userName = message.customerCode;
        newUser.mobile = message.customerCode;
        newUser.customerCode = message.customerCode;
        newUser.firstName = message.firstName;
        newUser.lastName = message.lastName;

        newUser.registerDate = new Date();
        newUser.isActive = true;

        userRepository.add(newUser).then(result => {
            if (result.id != 0) {
                // successful
            }
            else {
                // failed
            }
        }).catch((error) => HooryLogger.getInstance().error(error));

    };
}