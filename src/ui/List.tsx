import React, { Component } from "react";

interface IProps<T extends { [key: string]: any }> {
  headings: Array<keyof T>;
  values: T[];
  formatters: { [name: string]: (val: any) => string }
}

type Formatter = (val: any) => string

export class List<T> extends Component<IProps<T>, any> {
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
                  <td key={i}>{this.getFormatter(h)(v[h])}</td>
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
