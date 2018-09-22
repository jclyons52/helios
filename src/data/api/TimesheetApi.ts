import { Timesheet } from "../domain/TimeSheet";
import { TimesheetFactory } from "../factory/TimesheetFactory";
import { FakeRestApi, IRestApi } from "./RestApi";

export interface ITimesheetApi extends IRestApi<Timesheet> {}

export class FakeTimesheetApi extends FakeRestApi<Timesheet> implements ITimesheetApi {
    constructor(factory: TimesheetFactory) {
        super(factory)
    }
}