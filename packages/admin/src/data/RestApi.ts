import { IFactory } from "./Factory";

export interface IRestApi<T> {
    find(fields: Partial<T>): Promise<T[]>
    get(id: number): Promise<T>
    save(entity: T): Promise<T>
    delete(entity: T): Promise<boolean>
}

export interface IHasId {
    id: number
}

export class FakeRestApi<T extends IHasId> implements IRestApi<T> {
    constructor(private factory: IFactory<T>){}

    public async find(fields: Partial<T>): Promise<T[]> {
        return this.factory.createMany(30, fields)
    }
    public async get(id: number): Promise<T> {
        const entity = this.factory.create({})
        entity.id = id
        return entity
    }
    public async save(entity: T): Promise<T> {
        if(entity.id < 0) {
            entity.id = Math.random()
        }
        return entity
    }
    public async delete(entity: T): Promise<boolean> {
        return true
    }
}