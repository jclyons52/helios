import { User } from "../user/User";
import { TimesheetEntry } from "./TimesheetEntry";

export class Timesheet {
  constructor(
    public id: number,
    public user: User,
    public entries: TimesheetEntry[]
  ) {}
}
