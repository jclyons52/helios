import * as faker from "faker";
import React from "react";
import { Field, IFieldProps } from "../FieldType";

export class DateField<T> extends Field<T> {
    public fake() {
      return faker.date.recent();
    }
    public render(props: IFieldProps) {
      return (
        <div className="form-group">
          <label htmlFor={this.fieldName}>{this.fieldName}</label>
          <input
            type="date"
            value={props.value}
            onChange={this.onChange(props.onChange)}
            id={this.fieldName}
            className="form-control"
          />
        </div>
      );
    }
  }