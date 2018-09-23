import { FakeRestApi, IRestApi } from "../../framework/data/RestApi";
import { User } from "./User";
import { UserFactory } from "./UserFactory";

export interface IUserApi extends IRestApi<User> {}

export class FakeUserApi extends FakeRestApi<User> implements IUserApi {
    constructor(factory: UserFactory) {
        super(factory)
    }
}