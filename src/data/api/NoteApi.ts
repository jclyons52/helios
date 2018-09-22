import { Note } from "../domain/Note";
import { NoteFactory } from "../factory/NoteFactory";
import { IRestApi } from "./RestApi";

export interface INoteApi extends IRestApi<Note> {}

export class FakeNoteApi implements INoteApi {
    constructor(private notesFactory: NoteFactory){}

    public async find(fields: Partial<Note>): Promise<Note[]> {
        return this.notesFactory.createMany(3, fields)
    }
    public async get(id: number): Promise<Note> {
        return this.notesFactory.create({ id })
    }
    public async save(entity: Note): Promise<Note> {
        if(entity.id < 0) {
            entity.id = Math.random()
        }
        return entity
    }
    public async delete(entity: Note): Promise<boolean> {
        return true
    }
}