import * as faker from "faker";
import React from "react";
import { Field, IFieldProps } from "../FieldType";

export class BoolField<T> extends Field<T> {
    public fake() {
      return faker.random.boolean();
    }
    public render(props: IFieldProps) {
      return (
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            checked={props.value}
            id={this.getStringFieldName()}
          />
          <label className="form-check-label" htmlFor={this.getStringFieldName()}>
            {this.fieldName}
          </label>
        </div>
      );
    }
  }