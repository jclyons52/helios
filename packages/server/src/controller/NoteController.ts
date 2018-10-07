import {Note} from "../entity/Note";
import { RestController } from "./RestController";

export class NoteController extends RestController<Note> {
    constructor() {
        super(Note)
    }
}