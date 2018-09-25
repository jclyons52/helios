import * as faker from "faker";
import React from "react";
import { Class, Formatter, IFormatterMap } from "../../types";
import { modules } from "../decorators";
import { IModule } from "./Module";

export enum FieldType {
  num = "Number",
  str = "String",
  text = "Text",
  bool = "Boolean",
  userName = "username",
  email = "email",
  entity = "Entity"
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

  public abstract render(): any;

  public listFormatter(obj: IFormatterMap): IFormatterMap {
    return obj;
  }
}

// tslint:disable-next-line:max-classes-per-file
export class NumberField<T> extends Field<T> {
  public fake() {
    return faker.random.number();
  }

  public render() {
    return (
      <div className="input-group">
        <label htmlFor={this.fieldName}>{this.fieldName}</label>
        <input type="text" id={this.fieldName} className="form-control" />
      </div>
    );
  }
}

// tslint:disable-next-line:max-classes-per-file
export class StringField<T> extends Field<T> {
  public fake() {
    return faker.lorem.sentence();
  }
  public render() {
    return (
      <div className="input-group">
        <label htmlFor={this.fieldName}>{this.fieldName}</label>
        <input type="text" id={this.fieldName} className="form-control" />
      </div>
    );
  }
}

// tslint:disable-next-line:max-classes-per-file
export class UsernameField<T> extends Field<T> {
  public fake() {
    return faker.internet.userName();
  }
  public render() {
    return (
      <div className="input-group">
        <label htmlFor={this.fieldName}>{this.fieldName}</label>
        <input type="text" id={this.fieldName} className="form-control" />
      </div>
    );
  }
}

// tslint:disable-next-line:max-classes-per-file
export class EmailField<T> extends Field<T> {
  public fake() {
    return faker.internet.email();
  }
  public render() {
    return (
      <div className="input-group">
        <label htmlFor={this.fieldName}>{this.fieldName}</label>
        <input type="text" id={this.fieldName} className="form-control" />
      </div>
    );
  }
}

// tslint:disable-next-line:max-classes-per-file
export class TextField<T> extends Field<T> {
  public fake() {
    return faker.lorem.paragraph(3);
  }
  public render() {
    return (
      <div className="input-group">
        <label htmlFor={this.fieldName}>{this.fieldName}</label>
        <input type="text" id={this.fieldName} className="form-control" />
      </div>
    );
  }
}

// tslint:disable-next-line:max-classes-per-file
export class BoolField<T> extends Field<T> {
  public fake() {
    faker.random.boolean();
  }
  public render() {
    return (
      <div className="input-group">
        <label htmlFor={this.fieldName}>{this.fieldName}</label>
        <input type="text" id={this.fieldName} className="form-control" />
      </div>
    );
  }
}

// tslint:disable-next-line:max-classes-per-file
export class ManyToOne<T, V> extends Field<T> {
  public type: FieldType = FieldType.entity;
  constructor(
    public fieldName: keyof T & string,
    public classRef: Class<V>,
    public formatter: Formatter
  ) {
    super(fieldName);
  }

  public listFormatter(obj: IFormatterMap): IFormatterMap {
    obj[this.fieldName] = this.formatter;
    return obj;
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
  public render() {
    return (
      <div className="input-group">
        <label htmlFor={this.fieldName}>{this.fieldName}</label>
        <input type="text" id={this.fieldName} className="form-control" />
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

  public listFormatter(obj: IFormatterMap): IFormatterMap {
    obj[this.fieldName] = (arr: any[]) => String(arr.length);
    return obj;
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
  public render() {
    throw new Error("Method not implemented.");
  }
}
