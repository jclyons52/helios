import "bootstrap-material-design/dist/css/bootstrap-material-design.css";
import * as React from "react";
import { Route } from "react-router-dom"
import "./App.css";
import { Navbar } from "./ui/Navbar";
import { NotesPanel } from "./ui/notes/NotesPanel";
import { Sidebar } from "./ui/Sidebar";


class App extends React.Component {
  public render() {
    return [
      <Navbar key={1} />,
      <div key={2} className="container-fluid">
        <div className="row">
          <Sidebar />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <Route path="" component={NotesPanel} />
          </main>
        </div>
      </div>
    ];
  }
}

export default App;
