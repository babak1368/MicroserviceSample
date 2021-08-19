import { Router, Request, Response } from 'express';
import { myContainer } from '../ioc/inversify.config';
import UserController from '../controller/userController';
import authenticateJWT from '../middleware/authenticateJWT';
import UserValidator from '../validator/userValidator';


export default (router: Router) => {
  
  const controller = myContainer.get<UserController>("UserController");;// new UserController();

  var validator = new UserValidator();

  router.post('/user/login', validator.validateLogin, controller.loginPostHandler);
  router.post('/user/create', validator.validateCreate, controller.createPostHandler);

};

// the authenticationJWT as a middleware can be used here, exactly between the request and handler.
// this also added by babak


