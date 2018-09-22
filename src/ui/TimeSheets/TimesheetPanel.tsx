import moment from "moment";
import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import { Consumer } from "../../Context";
import { ITimesheetStore } from "../../data";
import { TimesheetEntry } from "../../data/timesheet/TimesheetEntry";
import { TimesheetsList } from "./TimesheetList";

const localizer = BigCalendar.momentLocalizer(moment);

export const TimesheetPanel = () => (
  <Consumer>
    {c => <TimesheetPanelComponent timesheetStore={c.timesheetStore} />}
  </Consumer>
);

interface IProps {
  timesheetStore: ITimesheetStore;
}

export class TimesheetPanelComponent extends Component<IProps, any> {
  public render() {
    return (
      <span>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
          <h1 className="h2">Dashboard</h1>
        </div>
        <BigCalendar<TimesheetEntry>
          // @ts-ignore
          localizer={localizer}
          events={this.props.timesheetStore.timesheetEntries}
          startAccessor="start"
          endAccessor="end"
        />
        <h2>Time Sheets</h2>
        <TimesheetsList />
      </span>
    );
  }
}
