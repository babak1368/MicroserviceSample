import { User } from "../domain/user";
import { EntityRepository, ObjectType } from "typeorm";
import { inject, injectable, optional } from "inversify";
import RepositoryBase from "./core/repositoryBase";
import { Role } from "../domain/role";
 
@injectable()
@EntityRepository(Role)
export class UserRepository extends RepositoryBase<Role>
{
    constructor(@inject("ObjectType") @optional() type: ObjectType<Role> = User) {
        super(type);
    }
}