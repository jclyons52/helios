import {Note} from "../entity/Note";
import { RestController } from "./RestController";

export class UserController extends RestController<Note> {
    constructor() {
        super(Note)
    }
}