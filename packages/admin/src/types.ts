import { IModule } from "./data/Module";
import { IHasId } from "./data/RestApi";
import { Field } from "./data/FieldType";
import { Map } from "immutable";

// tslint:disable-next-line:ban-types
type Abstract<T> = Function & { prototype: T };
type Constructor<T> = new () => T;
export type Class<T> = Abstract<T> | Constructor<T>;

export type Formatter = (val: any) => string;

export interface IFormatterMap {
  [name: string]: Formatter;
}

export type ModuleParams<T extends IHasId> = { baseUrl: string } & Partial<
  IModule<T>
>;

export type FieldMap<T> = Map<keyof T, Field<T>>;

export enum FieldType {
  num = "Number",
  str = "String",
  text = "Text",
  bool = "Boolean",
  userName = "username",
  email = "email",
  entity = "Entity"
}
