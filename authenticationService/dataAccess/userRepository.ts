import { User } from "../domain/user";
import { EntityRepository, ObjectType } from "typeorm";
import { inject, injectable, optional } from "inversify";
import RepositoryBase from "./core/repositoryBase";
@injectable()
@EntityRepository(User)
export class UserRepository extends RepositoryBase<User> {
  constructor(@inject("ObjectType") @optional() type: ObjectType<User> = User) {
    super(type);
  }
}
