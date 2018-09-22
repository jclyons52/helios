import { observable } from "mobx";
import { INoteApi } from "../api/NoteApi";
import { Note } from "../domain/Note";

export interface INoteStore {
    notes: Note[]
}

export class NoteStore implements INoteStore {
    @observable
    public notes: Note[] = []

    constructor(private noteApi: INoteApi){}

    public async load() {
        const notes =  await this.noteApi.find({})
        this.notes = notes
    }
}