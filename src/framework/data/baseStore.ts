import { observable } from "mobx";
import { IRestApi } from "./RestApi";

export class BaseStore<T> {
    @observable
    public entities: T[] = []

    constructor(private api: IRestApi<T>) {}

    public async load() {
        this.entities = await this.api.find({})
    }
}