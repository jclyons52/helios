import { action, observable } from "mobx";
import { IHasId, IRestApi } from "./RestApi";

export class BaseStore<T extends IHasId> {
    @observable
    public entities: T[] = []

    constructor(private api: IRestApi<T>) {}

    public async load() {
        this.entities = await this.api.find({})
    }

    @action
    public onChange = <K extends keyof T>(id: number, field: K) => (value: T[K]) => {
        const entity = this.entities.find(e => e.id === id)
        if (!entity) {
            return
        }
        entity[field] = value
    }
}