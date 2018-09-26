import { field, manyToOne, oneToMany, Resource } from "../framework/decorators";
import { TimesheetEntry } from "./TimesheetEntry";
import { User } from "./User";

@Resource({ baseUrl: "/timesheets" })
export class Timesheet {
  @field()
    public id: number

    @manyToOne<Timesheet, User>(User)
    public user: User

    @oneToMany<Timesheet, TimesheetEntry>(TimesheetEntry)
    public entries: TimesheetEntry[]
}
