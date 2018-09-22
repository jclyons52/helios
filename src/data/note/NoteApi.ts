import { FakeRestApi, IRestApi } from "../base/RestApi";
import { Note } from "./Note";
import { NoteFactory } from "./NoteFactory";

export interface INoteApi extends IRestApi<Note> {}

export class FakeNoteApi extends FakeRestApi<Note> implements INoteApi {
    constructor(noteFactory: NoteFactory) {
        super(noteFactory)
    }
}