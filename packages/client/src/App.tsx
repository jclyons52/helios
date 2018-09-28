import "bootstrap-material-design/dist/css/bootstrap-material-design.css";
import * as React from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./App.css";

import { Layout } from "./framework/ui/Layout";


class App extends React.Component {
  public render() {
    return <Layout />
  }
}

export default App;
