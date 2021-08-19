import "reflect-metadata";
import { Container } from "inversify";
import EntityBase from "../domain/entityBase";
import { Repository } from "typeorm";
import RepositoryBase from "../dataAccess/core/repositoryBase";
import { UserRepository } from "../dataAccess/userRepository";
import UserController from "../controller/userController";

const myContainer = new Container();

myContainer.bind<RepositoryBase<any>>("RepositoryBase").to(RepositoryBase);
myContainer.bind<EntityBase>("TEntity").to(EntityBase);
myContainer.bind<Repository<any>>("Repository<T>").to(Repository);

myContainer.bind<UserRepository>("UserRepository").to(UserRepository);

myContainer.bind<UserController>("UserController").to(UserController);

export { myContainer };