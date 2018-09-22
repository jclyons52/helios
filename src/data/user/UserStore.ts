import { computed } from "mobx";
import { BaseStore } from "../base/baseStore";
import { User } from "./User";

export class UserStore extends BaseStore<User> {
    @computed
    get users() {
        return this.entities
    }
}