import { observer } from "mobx-react"
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Formatter } from "../../types";
import { IHasId } from "../data/RestApi";

interface IProps<T extends { id: number, [key: string]: any }> {
  headings: Array<keyof T>;
  values: T[];
  formatters: { [name: string]: Formatter }
  editRoute: (id: number) => string
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
              <tr>
                {this.props.headings.map((h, i) => (
                  <td key={i}>
                  <Link to={this.props.editRoute(v.id)} >
                  {this.getFormatter(h)(v[h])}
                  </Link>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  private getFormatter(key: any): Formatter {
    if(this.props.formatters[key]) {
        return this.props.formatters[key]
    }
    return (a) => a
  }
}
