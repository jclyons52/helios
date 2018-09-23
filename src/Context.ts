import * as React from "react"
import { ApiDriver, Config, DataModule } from "./data";

const dataModule = new DataModule(new Config(ApiDriver.Fake))
const { Consumer } = React.createContext({
    noteStore: dataModule.noteStore,
    timesheetStore: dataModule.timesheetStore,
    userStore: dataModule.userStore
})

export { Consumer }