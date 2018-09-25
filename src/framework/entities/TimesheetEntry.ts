import { field, Form } from "../decorators";

@Form()
export class TimesheetEntry {
  @field<TimesheetEntry>()
  public id: number
  @field<TimesheetEntry>()
  public title: string
  @field<TimesheetEntry>()
  public start: Date
  @field<TimesheetEntry>()
  public end: Date
  @field<TimesheetEntry>()
  public allDay?: boolean
  public resource?: any
}
