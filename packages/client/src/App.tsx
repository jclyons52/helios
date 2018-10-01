import { Kernel, LayoutComponent } from "@typewryter/admin";
import "bootstrap-material-design/dist/css/bootstrap-material-design.css";
import * as React from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./App.css";
import * as Entities from "./entities";

const kernel = new Kernel()
kernel.boot(Entities)

class App extends React.Component {
  public render() {
    return <LayoutComponent endpoints={kernel.endpoints} />
  }
}

export default App;
