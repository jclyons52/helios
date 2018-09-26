import { field, Form } from "../framework/decorators";

@Form()
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
