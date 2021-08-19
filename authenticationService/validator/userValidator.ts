import validator from "validator";

export default class UserValidator {

    validateLogin(request: any, response: any, next: any) {
        const data = request.body;
        let customeMessage;

        validator.isEmpty(data['userName']);
        // Something ELSE,   Added by Babak 

        if (customeMessage)
            return response.send(customeMessage).status(400);
        next();
    }

    validateCreate(request: any, response: any, next: any) {
        const data = request.body;
        let customeMessage;

        // Bussiness validations                    // Added by babak

        if (customeMessage)
            return response.send(customeMessage).status(400);
        next();
    }

    validateUpdate(request: any, response: any, next: any) {
        const data = request.body;
        let customeMessage;

        // Bussiness validations                    // Added by babak

        if (customeMessage)
            return response.send(customeMessage).status(400);
        next();
    }

    validateDelete(request: any, response: any, next: any) {
        const data = request.body;
        let customeMessage;

        // Bussiness validations                    // Added by babak

        if (customeMessage)
            return response.send(customeMessage).status(400);
        next();
    }

}
