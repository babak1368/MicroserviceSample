import { Request, Response } from "express";
import { injectable } from "inversify";
import { myContainer } from "../ioc/inversify.config";
import ControllerBase from "./controllerBase";
import { User } from "../domain/user";
import ApiResult from "../dto/apiResult";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import config from "../config";
import { UserRepository } from "../dataAccess/userRepository";
import HooryLogger from "../loaders/loggerLoader";

@injectable()
export default class UserController extends ControllerBase {
  constructor() {
    super();
  }

  public async loginHandler(req: Request, res: Response): Promise<void> {
    const user: User = req.body as User;

    const userRepository = myContainer.get<UserRepository>("UserRepository");
    const sameUser = await userRepository.findOne({
      userName: user.userName,
    } as User);
    if (!sameUser) {
      res.json(ApiResult.error("Not Found"));
      return;
    }

    const arrayedPassword = new TextEncoder().encode(user.stringPassword);
    const hashedPassword = crypto
      .createHash("md5")
      .update(arrayedPassword)
      .digest();

    if (hashedPassword.compare(sameUser.password) !== 0) {
      res.json(ApiResult.error("Not Found"));
      return;
    }

    const token = jwt.sign(
      {
        userId: sameUser.id,
        firstName: sameUser.firstName,
        lastName: sameUser.lastName,
      },
      config.jwtSecret
    );

    res.json(token).status(200);
  }

  public async createHandler(req: Request, res: Response): Promise<void> {
    const user: User = req.body as User;

    const userRepository = myContainer.get<UserRepository>("UserRepository");

    const newUser = new User();
    newUser.userName = user.userName;
    newUser.mobile = user.mobile;
    newUser.customerCode = -1;
    newUser.registerDate = new Date();
    newUser.isActive = true;

    userRepository
      .add(newUser)
      .then((result) => {
        if (result.id != 0) {
          res.json(ApiResult.ok()).status(200);
          return;
        }
      })
      .catch((error) => HooryLogger.getInstance().error(error));

    return;
  }
}
