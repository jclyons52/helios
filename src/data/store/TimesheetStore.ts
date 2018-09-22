import { observable } from "mobx";
import { ITimesheetApi } from "../api/TimesheetApi";
import { Timesheet } from "../domain/TimeSheet";

export interface ITimesheetStore {
    timesheets: Timesheet[]
}

export class TimesheetStore implements ITimesheetStore {
    @observable
    public timesheets: Timesheet[] = []

    constructor(private timesheetApi: ITimesheetApi){}

    public async load() {
        this.timesheets = await this.timesheetApi.find({})
    }
}