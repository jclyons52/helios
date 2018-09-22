import { computed, observable } from "mobx";
import { ITimesheetApi } from "../api/TimesheetApi";
import { Timesheet } from "../domain/TimeSheet";
import { TimesheetEntry } from "../domain/TimesheetEntry";

export interface ITimesheetStore {
    timesheets: Timesheet[]
    readonly timesheetEntries: TimesheetEntry[]
}

export class TimesheetStore implements ITimesheetStore {
    @observable
    public timesheets: Timesheet[] = []

    @computed
    public get timesheetEntries() {
        return this.timesheets.reduce((carry, item) => [...carry, ...item.entries], [])
    }

    constructor(private timesheetApi: ITimesheetApi){}

    public async load() {
        this.timesheets = await this.timesheetApi.find({})
    }
}