import { observer } from "mobx-react";
import React, { Component } from "react";
import { Field } from "../data/FieldType";

interface IProps<T> {
  entity: T;
  fields: Array<Field<T>>;
}

@observer
export class Edit<T> extends Component<IProps<T>, any> {
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
    return this.props.fields.map(field => {
      return field.render()
    });
  }
}
