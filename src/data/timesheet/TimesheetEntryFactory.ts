import faker from "faker";
import { Factory } from "../../framework/data/Factory";
import { TimesheetEntry } from "./TimesheetEntry";

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