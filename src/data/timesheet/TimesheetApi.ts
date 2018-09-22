import { FakeRestApi, IRestApi } from "../base/RestApi";
import { Timesheet } from "./TimeSheet";
import { TimesheetFactory } from "./TimesheetFactory";

export interface ITimesheetApi extends IRestApi<Timesheet> {}

export class FakeTimesheetApi extends FakeRestApi<Timesheet> implements ITimesheetApi {
    constructor(factory: TimesheetFactory) {
        super(factory)
    }
}