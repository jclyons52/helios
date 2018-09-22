import { Timesheet } from "../domain/TimeSheet";
import { Factory } from "./Factory";
import { TimesheetEntryFatory } from "./TimesheetEntryFactory";
import { UserFactory } from "./UserFactory";


export class TimesheetFactory extends Factory<Timesheet> {

    constructor(
        private userFactory: UserFactory, 
        private timesheetEntryFactory: TimesheetEntryFatory
        ){
            super()
        }

    public create({
        id = Math.random(),
        user = this.userFactory.create({}),
        entries = this.timesheetEntryFactory.createMany(3)
    }: Partial<Timesheet>): Timesheet {
        return new Timesheet(id, user, entries)
    }

}