import { computed } from "mobx";
import { BaseStore } from "../../framework/data/baseStore";
import { User } from "./User";

export interface IUserStore {
    users: User[]
}

export class UserStore extends BaseStore<User> {
    @computed
    get users() {
        return this.entities
    }
}