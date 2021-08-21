import validator from "validator";
import { Request, Response } from "express";
export default class UserValidator {
  validateLogin(req: Request, res: Response, next: any): any {
    const data = req.body;
    let customeMessage;
    validator.isEmpty(data["userName"]);
    if (customeMessage) return res.send(customeMessage).status(400);
    next();
  }

  validateCreate(req: Request, res: Response, next: any): any {
    const data = req.body;
    let customeMessage;
    // Bussiness validations
    if (customeMessage) return res.send(customeMessage).status(400);
    next();
  }

  validateUpdate(req: Request, res: Response, next: any): any {
    const data = req.body;
    let customeMessage;
    // Bussiness validations
    if (customeMessage) return res.send(customeMessage).status(400);
    next();
  }

  validateDelete(req: Request, res: Response, next: any): any {
    const data = req.body;
    let customeMessage;
    // Bussiness validations
    if (customeMessage) return res.send(customeMessage).status(400);
    next();
  }
}
