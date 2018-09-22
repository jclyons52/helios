export class TimesheetEntry {
  constructor(
    public id: number,
    public title: string,
    public start: Date,
    public end: Date,
    public allDay?: boolean,
    public resource?: any
  ) {}
}
