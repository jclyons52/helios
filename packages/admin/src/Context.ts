import * as React from "react"
import { Kernel } from "./Kernel";

const kernel = new Kernel()
kernel.boot()
const { Consumer } = React.createContext({
    endpoints: kernel.endpoints
})

export { Consumer }