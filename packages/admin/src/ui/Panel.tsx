import { observer } from "mobx-react";
import React, { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import { BaseStore } from "../data/baseStore";
import { IHasId } from "../data/RestApi";
import { List } from "./List";
import { FieldMap } from "../types";


interface IProps<T extends IHasId> extends RouteComponentProps {
  store: BaseStore<T>
  fields: FieldMap<T>;
  name: string
}

@observer
export class Panel<T extends IHasId> extends Component<IProps<T>, any> {
  public render() {
    return (
      <span>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
          <h1 className="h2">{this.props.name}</h1>
        </div>
        <List<T>
        values={this.props.store.entities}
        fields={this.props.fields}
        editRoute={this.editRoute}
        history={this.props.history}
      />
      </span>
    );
  }

  private editRoute = (id: number) => `${this.props.name.toLowerCase()}/edit/${id}`
}
