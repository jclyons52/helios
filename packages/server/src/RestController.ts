import { getRepository, Repository } from 'typeorm';

// tslint:disable-next-line:ban-types
type Abstract<T> = Function & { prototype: T };
type Constructor<T> = new () => T;
type Class<T> = Abstract<T> | Constructor<T>;

export class RestController<T extends { id: number }> {
    repository: Repository<T>;
    constructor(classRef: Class<T>) {
        this.repository = getRepository(classRef);
    }

    public async findAll(entity: Partial<T>): Promise<T[]> {
        return this.repository.find({ where: entity });
    }

    public async find(id: string): Promise<T | undefined> {
        return this.repository.findOne(id);
    }

    public async save(entity: Partial<T>): Promise<T> {
        // @ts-ignore
        return this.repository.save(entity);
    }

    public async delete(id: string) {
        this.repository.delete(id);
    }
}