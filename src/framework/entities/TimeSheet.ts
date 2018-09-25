import { field, Form, manyToOne, oneToMany } from "../decorators";
import { TimesheetEntry } from "./TimesheetEntry";
import { User } from "./User";

@Form()
export class Timesheet {
  @field<Timesheet>()
    public id: number

    @manyToOne<Timesheet, User>(User)
    public user: User

    @oneToMany<Timesheet, TimesheetEntry>(TimesheetEntry)
    public entries: TimesheetEntry[]
}
