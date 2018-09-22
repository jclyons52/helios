import { computed } from "mobx";
import { Note } from "./Note";
import { BaseStore } from "../base/baseStore";

export interface INoteStore {
    notes: Note[]
}

export class NoteStore extends BaseStore<Note> implements INoteStore {
    @computed
    get notes() {
        return this.entities
    }
}