import { Endpoint } from "./framework/Endpoint";
import { NoteEdit } from "./ui/notes/NoteEdit";
import { NotesPanel } from "./ui/notes/NotesPanel";
import { TimesheetPanel } from "./ui/TimeSheets/TimesheetPanel";
import { UserPanel } from "./ui/user/UserPanel";

export const endpoints = [
    new Endpoint(() => "/notes", "Notes", NotesPanel, true),
    new Endpoint(() => "/notes/edit", "Edit Note", NoteEdit),
    new Endpoint(() => "/timesheets", "Time Sheets", TimesheetPanel),
    new Endpoint(() => "/users", "Users", UserPanel)
  ]