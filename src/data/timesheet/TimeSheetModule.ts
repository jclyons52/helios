import { IFactory } from "../../framework/data/Factory";
import { BaseModule } from "../../framework/data/Module";
import { UserFactory } from "../user/UserFactory";
import { Timesheet } from "./TimeSheet";
import { TimesheetEntryFatory } from "./TimesheetEntryFactory";
import { TimesheetFactory } from "./TimesheetFactory";

export class TimeSheetModule extends BaseModule<Timesheet> {

    protected factoryFactory(): IFactory<Timesheet> {
        return new TimesheetFactory(this.userFactory, this.timesheetEntryFactory);
    }

    private get timesheetEntryFactory() {
        return new TimesheetEntryFatory()
    }

    private get userFactory() {
        return new UserFactory()
    }
}