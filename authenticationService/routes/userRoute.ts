import { Router, Request, Response } from "express";
import { myContainer } from "../ioc/inversify.config";
import UserController from "../controller/userController";
import UserValidator from "../validator/userValidator";

export default (router: Router) => {
  const controller = myContainer.get<UserController>("UserController"); // new UserController();
  const validator = new UserValidator();

  router.post("/user/login", validator.validateLogin, controller.loginHandler);
  router.post("/user", validator.validateCreate, controller.createHandler);
};
