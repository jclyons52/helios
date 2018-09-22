import { Note } from "../domain/Note";
import { NoteFactory } from "../factory/NoteFactory";
import { FakeRestApi, IRestApi } from "./RestApi";

export interface INoteApi extends IRestApi<Note> {}

export class FakeNoteApi extends FakeRestApi<Note> implements INoteApi {
    constructor(noteFactory: NoteFactory) {
        super(noteFactory)
    }
}