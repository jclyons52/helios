import { computed } from "mobx";
import { BaseStore } from "../../framework/data/baseStore";
import { Note } from "./Note";

export interface INoteStore {
    notes: Note[]
}

export class NoteStore extends BaseStore<Note> implements INoteStore {
    @computed
    get notes() {
        return this.entities
    }
}