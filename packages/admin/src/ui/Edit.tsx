import { observer } from "mobx-react";
import React, { Component } from "react";
import { BaseStore } from "../data/baseStore";
import { Field } from "../data/FieldType";
import { IHasId } from "../data/RestApi";

interface IProps<T extends IHasId> {
  entity: T;
  store: BaseStore<T>
  fields: Array<Field<T>>;
}

@observer
export class Edit<T extends IHasId> extends Component<IProps<T>, any> {
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
      const fieldName: keyof T & string = field.fieldName
      return field.render({ 
        onChange: this.props.store.onChange(this.props.entity, fieldName),
        value: this.props.entity[fieldName],
      })
    });
  }
}
