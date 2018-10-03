import * as H from "history"
import { observer } from "mobx-react";
import React, { Component } from "react";
import { IHasId } from "../data/RestApi";
import { FieldMap } from "../types";

interface IProps<T extends { id: number; [key: string]: any }> {
  fields: FieldMap<T>;
  values: T[];
  editRoute: (id: number) => string;
  history: H.History
}

@observer
export class List<T extends IHasId> extends Component<IProps<T>, any> {
  public render() {
    return (
      <div className="table-responsive">
        <table className="table table-hover table-sm">
          <thead>
            <tr>
              {this.props.fields.toArray().map((field, i) => (
                <th key={i}>{field.fieldName}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.props.values.map(v => (
              <tr onClick={this.linkToEdit(v.id)}>
                {this.props.fields.toArray().map((field, i) => (
                  <td key={i}>{
                    field.listFormatter(v[field.fieldName])
                  }</td>
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
  }
}
