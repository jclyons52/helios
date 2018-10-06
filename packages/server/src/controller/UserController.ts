import {User} from "../entity/User";
import { RestController } from "./RestController";

export class UserController extends RestController<User> {
    constructor() {
        super(User)
    }
}