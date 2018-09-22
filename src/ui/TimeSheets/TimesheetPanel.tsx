import React, { Component } from "react";
import { TimesheetsList } from "./TimesheetList";


export class TimesheetPanel extends Component<any, any> {
    public render() {
        return (
            <span>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
            </div>
            <h2>Time Sheets</h2>
            <TimesheetsList />
            </span>
        )
    }
}