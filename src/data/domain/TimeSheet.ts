import { TimesheetEntry } from "./TimesheetEntry";
import { User } from "./User";

export class Timesheet {
  constructor(
    public id: number,
    public user: User,
    public entries: TimesheetEntry[]
  ) {}
}
