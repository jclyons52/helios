import { Factory } from "../base/Factory";
import { UserFactory } from "../user/UserFactory";
import { Timesheet } from "./TimeSheet";
import { TimesheetEntryFatory } from "./TimesheetEntryFactory";


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