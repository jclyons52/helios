import { action, observable } from "mobx";
import { IHasId, IRestApi } from "./RestApi";

export class BaseStore<T extends IHasId> {
    @observable
    public entities: T[] = []

    constructor(private api: IRestApi<T>) {}

    public async load() {
        this.entities = await this.api.find({})
    }

    public find(id: number) {
        return this.entities.find(e => e.id === id)
    }

    @action
    public onChange = <K extends keyof T & string>(entity: T, field: K ) => (value: T[K]) => {
        entity[field] = value
    }
}