import faker from "faker";
import { TimesheetEntry } from "../domain/TimesheetEntry";
import { Factory } from "./Factory";

export class TimesheetEntryFatory extends Factory<TimesheetEntry> {
    public create({
        id = Math.random(),
        title = faker.lorem.sentence(),
        start = faker.date.past(),
        end = faker.date.future(),
        allDay = faker.random.boolean()
    }: Partial<TimesheetEntry>): TimesheetEntry {
        return new TimesheetEntry(
            id,
            title,
            start,
            start,
            allDay
        )
    }
    
}