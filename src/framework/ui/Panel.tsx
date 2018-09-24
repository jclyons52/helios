import React, { Component } from "react";
import { BaseStore } from "../data/baseStore";
import { List } from "./List";


interface IProps<T> {
  store: BaseStore<T>
  headings: Array<keyof T>
  formatters: { [name: string]: (val: any) => string }
  name: string
}

export class Panel<T> extends Component<IProps<T>, any> {
  public render() {
    return (
      <span>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
          <h1 className="h2">{this.props.name}</h1>
        </div>
        <List<T>
        headings={this.props.headings}
        formatters={this.props.formatters}
        values={this.props.store.entities}
      />
      </span>
    );
  }
}
