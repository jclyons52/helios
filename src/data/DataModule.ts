import { IConfig } from "./Config"
import { InternalContainer } from "./InternalContainer";
import { INoteStore } from "./note/NoteStore";
import { ITimesheetStore } from "./timesheet/TimesheetStore";


export class DataModule {
    private internalContainer: InternalContainer;
    constructor(config: IConfig){
        this.internalContainer = new InternalContainer(config)
    }

    public get noteStore(): INoteStore {
        return this.internalContainer.noteStore
    }

    public get timesheetStore(): ITimesheetStore {
        return this.internalContainer.timesheetStore
    }
}