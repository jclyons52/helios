import { FakeNoteApi } from "./api/NoteApi";
import { ApiDriver, IConfig } from "./Config";
import { NoteFactory } from "./factory/NoteFactory";
import { NoteStore } from "./store/NoteStore";

export class InternalContainer {
    constructor(private config: IConfig){}

    public get noteApi() {
        switch(this.config.apiDriver) {
            case ApiDriver.Fake: return new FakeNoteApi(this.noteFactory)
            default: return new FakeNoteApi(this.noteFactory)
        }
    }

    public get noteFactory() {
        return new NoteFactory()
    }

    public get noteStore() {
        const store = new NoteStore(this.noteApi)
        store.load()
        return store
    }
}