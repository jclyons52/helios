import { BaseModule } from "../../framework/data/Module";
import { IConfig } from "../Config";
import { User } from "./User";

export class UserModule extends BaseModule<User> {
    constructor(config: IConfig) {
        super(config, User)
    }
}