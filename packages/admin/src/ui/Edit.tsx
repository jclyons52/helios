import { observer } from "mobx-react";
import React, { Component } from "react";
import { BaseStore } from "../data/baseStore";
import { IHasId } from "../data/RestApi";
import { FieldMap } from "../types";

export interface IEditProps<T extends IHasId> {
  entity: T;
  store: BaseStore<T>
  fields: FieldMap<T>;
}

@observer
export class Edit<T extends IHasId> extends Component<IEditProps<T>, any> {
  public render() {
    this.getFields();
    return (
      <div className="row">
        <div className="col-md-8 order-md-1">
          <form className="needs-validation">{this.getFields()}</form>
        </div>
      </div>
    );
  }

  private getFields() {
    return this.props.fields.renderFields(this.props.entity, this.props.store.onChange)
  }
}
