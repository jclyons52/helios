import * as faker from "faker";
import React, { ChangeEvent } from "react";
import { BoolField } from "./field/BoolField";
import { NumberField } from "./field/NumberField";
import { StringField } from "./field/StringField";
import { TextField } from "./field/TextField";

export enum FieldType {
  num = "Number",
  str = "String",
  text = "Text",
  bool = "Boolean",
  userName = "username",
  email = "email",
  entity = "Entity"
}

  /**
   * 
   * @todo fix any type
   */
export interface IFieldProps {
  value: any
  onChange: (value: any) => void
}

export abstract class Field<T> {
  public static create<T>(
    fieldName: keyof T & string,
    type: FieldType
  ): Field<T> {
    switch (type) {
      case FieldType.str:
        return new StringField<T>(fieldName);
      case FieldType.text:
        return new TextField<T>(fieldName);
      case FieldType.userName:
        return new UsernameField<T>(fieldName);
      case FieldType.email:
        return new EmailField<T>(fieldName);
      case FieldType.num:
        return new NumberField<T>(fieldName);
      case FieldType.bool:
        return new BoolField<T>(fieldName);
      default:
        return new StringField<T>(fieldName);
    }
  }
  constructor(public fieldName: keyof T & string) {}

  public abstract fake(): any;

  public abstract render(props: IFieldProps): any;

  public listFormatter = (value: any) => {
    return <span>{value}</span>;
  }

  protected onChange(func: (val: any) => void) {
    return (event: ChangeEvent<HTMLInputElement>) => {
      func(event.currentTarget.value)
    }
  }
}

// tslint:disable-next-line:max-classes-per-file
export class UsernameField<T> extends Field<T> {
  public fake() {
    return faker.internet.userName();
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

// tslint:disable-next-line:max-classes-per-file
export class EmailField<T> extends Field<T> {
  public fake() {
    return faker.internet.email();
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

