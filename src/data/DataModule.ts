import { Endpoint } from "../framework/Endpoint";
import { IConfig } from "./Config"
import { InternalContainer } from "./InternalContainer";
import { ITimesheetStore } from "./timesheet/TimesheetStore";


export class DataModule {
    private internalContainer: InternalContainer;
    constructor(config: IConfig){
        this.internalContainer = new InternalContainer(config)
    }

    public get endpoints(): Endpoint[] {
        return [...this.internalContainer.noteModule.endpoints, ...this.internalContainer.userModule.endpoints]
    }

    public get timesheetStore(): ITimesheetStore {
        return this.internalContainer.timesheetStore
    }
}