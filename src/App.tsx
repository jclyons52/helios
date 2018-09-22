import "bootstrap-material-design/dist/css/bootstrap-material-design.css";
import * as React from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Redirect, Route } from "react-router-dom"
import "./App.css";
import { Navbar } from "./ui/Navbar";
import { NotesPanel } from "./ui/notes/NotesPanel";
import { Sidebar } from "./ui/Sidebar";
import { TimesheetPanel } from "./ui/TimeSheets/TimesheetPanel";


class App extends React.Component {
  public render() {
    return [
      <Navbar key={1} />,
      <div key={2} className="container-fluid">
        <div className="row">
          <Sidebar />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <Route path="/notes" component={NotesPanel} />
          <Route path="/timesheets" component={TimesheetPanel} />
          <Redirect from="/" to={"/notes"} />
          </main>
        </div>
      </div>
    ];
  }
}

export default App;
