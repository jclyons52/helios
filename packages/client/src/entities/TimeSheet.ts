import { field, manyToOne, oneToMany, Resource } from "@typewryter/admin";
import { TimesheetEntry } from "./TimesheetEntry";
import { User } from "./User";

@Resource({ baseUrl: "/timesheets" })
export class Timesheet {
  @field()
  public id: number;

  @manyToOne<User>(User)
  public user: User;

  @oneToMany<TimesheetEntry>(TimesheetEntry)
  public entries: TimesheetEntry[];
}
