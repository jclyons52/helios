import * as faker from "faker";
import React from "react";
import { Field, IFieldProps } from "../FieldType";


export class TextField<T> extends Field<T> {
    public fake() {
      return faker.lorem.paragraph(3);
    }
    public render(props: IFieldProps) {
      return (
        <div className="form-group">
          <label htmlFor={this.fieldName}>{this.fieldName}</label>
          <input
            type="text"
            value={props.value}
            onChange={this.onChange(props.onChange)}
            id={this.fieldName}
            className="form-control"
          />
        </div>
      );
    }
  }