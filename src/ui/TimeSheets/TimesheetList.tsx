import { observer } from "mobx-react";
import React, { Component } from "react";
import { Consumer } from "../../Context";
import { ITimesheetStore } from "../../data";
import { Timesheet } from "../../data/domain/TimeSheet";
import { User } from "../../data/domain/User";
import { List } from "../List";

export const TimesheetsList = () => (
  <Consumer>{c => <TimesheetsListComponent Timesheetstore={c.timesheetStore} />}</Consumer>
);

interface IProps {
  Timesheetstore: ITimesheetStore;
}

@observer
export class TimesheetsListComponent extends Component<IProps, any> {
  public render() {
    return (
      <List<Timesheet>
        headings={["id", "user"]}
        formatters={{ user: (u: User) => u.username }}
        values={this.props.Timesheetstore.timesheets}
      />
    );
  }
}