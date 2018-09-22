import { FakeNoteApi } from "./api/NoteApi";
import { FakeTimesheetApi } from "./api/TimesheetApi";
import { ApiDriver, IConfig } from "./Config";
import { NoteFactory } from "./factory/NoteFactory";
import { TimesheetEntryFatory } from "./factory/TimesheetEntryFactory";
import { TimesheetFactory } from "./factory/TimesheetFactory";
import { UserFactory } from "./factory/UserFactory";
import { NoteStore } from "./store/NoteStore";
import { TimesheetStore } from "./store/TimesheetStore";

export class InternalContainer {
    constructor(private config: IConfig){}

    /**
     * START Notes
     */
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

    /**
     * START Timesheets
     */
    public get timesheetApi() {
        switch(this.config.apiDriver) {
            case ApiDriver.Fake: return new FakeTimesheetApi(this.timesheetFactory)
            default: return new FakeTimesheetApi(this.timesheetFactory)
        }
    }

    public get timesheetStore() {
        const store = new TimesheetStore(this.timesheetApi)
        store.load()
        return store
    }

    public get timesheetFactory() {
        return new TimesheetFactory(this.userFactory, this.timesheetEntryFactory)
    }

    public get userFactory() {
        return new UserFactory()
    }

    public get timesheetEntryFactory() {
        return new TimesheetEntryFatory()
    }
}