import { User } from "../domain/user";
import { UserRepository } from "../dataAccess/userRepository";
import { myContainer } from "../ioc/inversify.config";
import BaseHandler from "./core/baseHandler";
import HooryLogger from "../loaders/loggerLoader";
export default class CustomerDeleteMessageHandler extends BaseHandler {
  public async handle(message: any) {
    const userRepository = myContainer.get<UserRepository>("UserRepository");
    const sameUser = await userRepository.findOne({
      customerCode: message.customerCode,
    } as User);
    if (!sameUser) return;

    userRepository
      .remove(sameUser)
      .then((result) => {
        if (result.id != 0) {
        } else {
        }
      })
      .catch((error) => HooryLogger.getInstance().error(error));
  }
}
