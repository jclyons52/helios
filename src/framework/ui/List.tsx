import * as H from "history"
import { observer } from "mobx-react";
import React, { Component } from "react";
import { Formatter } from "../../types";
import { IHasId } from "../data/RestApi";

interface IProps<T extends { id: number; [key: string]: any }> {
  headings: Array<keyof T>;
  values: T[];
  formatters: { [name: string]: Formatter };
  editRoute: (id: number) => string;
  history: H.History
}

@observer
export class List<T extends IHasId> extends Component<IProps<T>, any> {
  public render() {
    return (
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              {this.props.headings.map((h, i) => (
                <th key={i}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.props.values.map(v => (
              <tr onClick={this.linkToEdit(v.id)}>
                {this.props.headings.map((h, i) => (
                  <td key={i}>{this.getValue(h, v)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  private linkToEdit = (id: number): any => {
    const route = this.props.editRoute(id);
    return () => this.props.history.push(route);
  };

  private getValue(h: keyof T, v: T): React.ReactNode {
    return this.getFormatter(h)(v[h]);
  }

  private getFormatter(key: any): Formatter {
    if (this.props.formatters[key]) {
      return this.props.formatters[key];
    }
    return a => a;
  }
}
