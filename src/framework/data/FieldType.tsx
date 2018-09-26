import * as faker from "faker";
import React, { ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { Class, Formatter } from "../../types";
import { modules } from "../decorators";
import { IModule } from "./Module";
import { IHasId } from "./RestApi";

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
interface IFieldProps {
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
export class NumberField<T> extends Field<T> {
  public fake() {
    return faker.random.number();
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
export class StringField<T> extends Field<T> {
  public fake() {
    return faker.lorem.sentence();
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

// tslint:disable-next-line:max-classes-per-file
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

// tslint:disable-next-line:max-classes-per-file
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
          id={this.fieldName}
        />
        <label className="form-check-label" htmlFor={this.fieldName}>
          {this.fieldName}
        </label>
      </div>
    );
  }
}

// tslint:disable-next-line:max-classes-per-file
export class ManyToOne<T, V extends IHasId> extends Field<T> {
  public type: FieldType = FieldType.entity;
  constructor(
    public fieldName: keyof T & string,
    public classRef: Class<V>,
    public formatter: Formatter
  ) {
    super(fieldName);
  }

  public listFormatter = (obj: V) => {
    const m: IModule<any> | undefined = modules.find(
      mm => mm.name === this.classRef.name
    );
    if (!m) {
      return <span>{obj.toString()}</span>
    }
    return <Link to={m.editRoute(String(obj.id))} >{obj.toString()}</Link> 
  }

  public fake() {
    const m: IModule<any> | undefined = modules.find(
      mm => mm.name === this.classRef.name
    );
    if (m) {
      return m.factory.create({});
    }
    return null;
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
export class OneToMany<T, V> extends Field<T> {
  public type: FieldType = FieldType.entity;
  constructor(public fieldName: keyof T & string, public classRef: Class<V>) {
    super(fieldName);
  }

  public listFormatter = (arr: V[]) =>  {
    return <span>{arr.length}</span>
  }

  public fake() {
    const m: IModule<any> | undefined = modules.find(
      mm => mm.name === this.classRef.name
    );
    if (m) {
      return m.factory.createMany(3);
    }
    return null;
  }
  public render(props: IFieldProps) {
    throw new Error("Method not implemented.");
  }
}
