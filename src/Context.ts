import * as React from "react"
import { ApiDriver, Config, DataModule } from "./data";

const dataModule = new DataModule(new Config(ApiDriver.Fake))
const { Consumer } = React.createContext({
    endpoints: dataModule.endpoints,
    timesheetStore: dataModule.timesheetStore,
})

export { Consumer }