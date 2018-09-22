import { FakeRestApi, IRestApi } from "../base/RestApi";
import { User } from "./User";
import { UserFactory } from "./UserFactory";

export interface IUserApi extends IRestApi<User> {}

export class UserApi extends FakeRestApi<User> implements IUserApi {
    constructor(factory: UserFactory) {
        super(factory)
    }
}