import { computed } from "mobx";
import { BaseStore } from "../base/baseStore";
import { Timesheet } from "./TimeSheet";
import { TimesheetEntry } from "./TimesheetEntry";

export interface ITimesheetStore {
    timesheets: Timesheet[]
    readonly timesheetEntries: TimesheetEntry[]
}

export class TimesheetStore extends BaseStore<Timesheet> implements ITimesheetStore {
    @computed
    get timesheets() {
        return this.entities
    }

    @computed
    public get timesheetEntries() {
        return this.timesheets.reduce((carry, item) => [...carry, ...item.entries], [])
    }
}