import { BaseModule } from "../../framework/data/Module";
import { IConfig } from "../Config";
import { Note } from "./Note";

export class NoteModule extends BaseModule<Note> {
    constructor(config: IConfig) {
        super(config, Note)
    }
}