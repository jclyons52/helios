import { ApiDriver, IConfig } from "./Config";
import { NoteModule } from "./note/NoteModule";
import { FakeTimesheetApi } from "./timesheet/TimesheetApi";
import { TimesheetEntryFatory } from "./timesheet/TimesheetEntryFactory";
import { TimesheetFactory } from "./timesheet/TimesheetFactory";
import { TimesheetStore } from "./timesheet/TimesheetStore";
import { UserModule } from "./user/UserModule";

export class InternalContainer {
    public noteModule: NoteModule;
    public userModule: UserModule;
    constructor(private config: IConfig){
        this.noteModule = new NoteModule(config)
        this.userModule = new UserModule(config)
    }

    /**
     * START Notes
     */
    public get noteApi() {
        return this.noteModule.api
    }

    public get noteFactory() {
        return this.noteModule.factory
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
        return new TimesheetFactory(this.userModule.factory, this.timesheetEntryFactory)
    }

    public get timesheetEntryFactory() {
        return new TimesheetEntryFatory()
    }
}