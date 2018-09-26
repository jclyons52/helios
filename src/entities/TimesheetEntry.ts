import { field, Resource } from "../framework/decorators";

@Resource({ baseUrl: "/timesheetentries" })
export class TimesheetEntry {
  @field()
  public id: number

  @field()
  public title: string

  @field()
  public start: Date

  @field()
  public end: Date

  @field()
  public allDay?: boolean

  public resource?: any
}
