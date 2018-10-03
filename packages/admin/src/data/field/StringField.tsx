import * as faker from "faker";
import React from "react";
import { Field, IFieldProps } from "../FieldType";

export class StringField<T> extends Field<T> {
    public fake() {
      return faker.lorem.sentence();
    }
    public render(props: IFieldProps) {
      return (
        <div className="form-group">
          <label htmlFor={this.getStringFieldName()}>{this.fieldName}</label>
          <input
            type="text"
            value={props.value}
            onChange={this.onChange(props.onChange)}
            id={this.getStringFieldName()}
            className="form-control"
          />
        </div>
      );
    }
  }