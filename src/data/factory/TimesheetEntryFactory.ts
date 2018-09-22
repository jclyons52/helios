import { TimesheetEntry } from "../domain/TimesheetEntry";
import { Factory } from "./Factory";

export class TimesheetEntryFatory extends Factory<TimesheetEntry> {
    public create(params: Partial<TimesheetEntry>): TimesheetEntry {
        return new TimesheetEntry()
    }
    
}