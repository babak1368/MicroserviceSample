import { Repository, UpdateResult } from "typeorm";
import Context from "./context";
import { injectable } from "inversify";

export type ObjectType<TEntity> = (new () => TEntity) | Function;
@injectable()
export default class RepositoryBase<TEntity>
{
    protected repository: Repository<TEntity>;
    type: ObjectType<TEntity>;

    constructor(type: ObjectType<TEntity>) {
        this.type = type;

    }

    public async getAll(joins: string[], select: any = null): Promise<TEntity[]> {
        this.repository = (await Context).getRepository(this.type);
        return await this.repository.find({ relations: (joins ? joins : undefined), select: (select ? select : undefined) });
    }

    public async where(condition: any, joins: string[] = null, select: any = null): Promise<TEntity[]> {
        this.repository = (await Context).getRepository(this.type);
        return await this.repository.find({ where: condition, relations: joins ? joins : null, select: select });
    }

    public async findOne(condition: TEntity, joins: string[] = null): Promise<TEntity> {
        this.repository = (await Context).getRepository(this.type);
        return await this.repository.findOne({ where: condition, relations: joins });
    }

    public async getById(id: number): Promise<TEntity> {
        this.repository = (await Context).getRepository(this.type);
        return await this.repository.findOne(id);
    }

    public async getCount(condition: TEntity): Promise<number> {
        this.repository = (await Context).getRepository(this.type);
        return await this.repository.count({ where: condition });
    }

    public async save(entity: TEntity): Promise<TEntity> {
        this.repository = (await Context).getRepository(this.type);
        return await this.repository.save(entity);
    }

    public async add(entity: TEntity): Promise<TEntity> {
        this.repository = (await Context).getRepository(this.type);
        return await this.repository.save(entity);
    }

    public async edit(entity: TEntity): Promise<TEntity> {
        this.repository = (await Context).getRepository(this.type);
        return await this.repository.save(entity);
    }

    public async remove(entity: TEntity): Promise<TEntity> {
        this.repository = (await Context).getRepository(this.type);
        return await this.repository.remove(entity);
    }

    public async update(id: number, entity: TEntity): Promise<UpdateResult> {
        this.repository = (await Context).getRepository(this.type);
        return await this.repository.update(id, entity);
    }



}

