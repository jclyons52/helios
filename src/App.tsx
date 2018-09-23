import "bootstrap-material-design/dist/css/bootstrap-material-design.css";
import * as React from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Redirect, Route } from "react-router-dom"
import "./App.css";
import { Navbar } from "./framework/ui/Navbar";
import { Sidebar } from "./framework/ui/Sidebar";
import { routes } from "./routes"

class App extends React.Component {
  public render() {
    return [
      <Navbar key={1} />,
      <div key={2} className="container-fluid">
        <div className="row">
          <Sidebar endpoints={routes} />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          {routes.map(endpoint => (
          <Route path={endpoint.url()} component={endpoint.component} />
          ))}
          <Redirect from="/" to={"/notes"} />
          </main>
        </div>
      </div>
    ];
  }
}

export default App;
