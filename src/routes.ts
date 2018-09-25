import { Endpoint } from "./framework/Endpoint";
import { TimesheetPanel } from "./ui/TimeSheets/TimesheetPanel";

export const endpoints = [
    new Endpoint(() => "/timesheets", "Time Sheets", TimesheetPanel)
  ]