import React, { Component } from "react";
import { Field, FieldType } from "../data/FieldType";
// import { Note } from "../../data/note/Note";

interface IProps<T> {
  entity: T;
  fields: Array<Field<T>>;
}

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
      switch (field.type) {
        case FieldType.str:
          return (
            <div className="input-group">
              <label htmlFor={field.fieldName}>{field.fieldName}</label>
              <input
                type="text"
                id={field.fieldName}
                className="form-control"
              />
            </div>
          );
        case FieldType.text:
          return (
            <div className="input-group">
              <label htmlFor={field.fieldName}>{field.fieldName}</label>
              <input
                type="text"
                id={field.fieldName}
                className="form-control"
              />
            </div>
          );
        case FieldType.num:
          return (
            <div className="input-group">
              <label htmlFor={field.fieldName}>{field.fieldName}</label>
              <input
                type="text"
                id={field.fieldName}
                className="form-control"
              />
            </div>
          );
        case FieldType.bool:
          return (
            <div className="input-group">
              <label htmlFor={field.fieldName}>{field.fieldName}</label>
              <input
                type="text"
                id={field.fieldName}
                className="form-control"
              />
            </div>
          );
        default:
          return null;
      }
    });
  }
}
