import { Endpoint } from "./framework/Endpoint";
import { NotesPanel } from "./ui/notes/NotesPanel";
import { TimesheetPanel } from "./ui/TimeSheets/TimesheetPanel";
import { UserPanel } from "./ui/user/UserPanel";

export const routes = [
    new Endpoint(() => "/notes", "Notes", NotesPanel),
    new Endpoint(() => "/timesheets", "Time Sheets", TimesheetPanel),
    new Endpoint(() => "/users", "Users", UserPanel)
  ]