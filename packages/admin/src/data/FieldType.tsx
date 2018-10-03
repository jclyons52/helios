import * as faker from "faker";
import React, { ChangeEvent } from "react";

/**
 * @todo fix any type
 */
export interface IFieldProps {
  value: any;
  onChange: (value: any) => void;
}

export abstract class Field<T> {
  constructor(public fieldName: keyof T) {}

  public getStringFieldName() {
    return String(this.fieldName)
  }
  public abstract fake(): any;

  public abstract render(props: IFieldProps): any;

  public listFormatter = (value: any) => {
    return <span>{value}</span>;
  };

  protected onChange(func: (val: any) => void) {
    return (event: ChangeEvent<HTMLInputElement>) => {
      func(event.currentTarget.value);
    };
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

// tslint:disable-next-line:max-classes-per-file
export class EmailField<T> extends Field<T> {
  public fake() {
    return faker.internet.email();
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
