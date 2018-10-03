import { IModule } from "./data/Module";
import { IHasId } from "./data/RestApi";
import { Field } from "./data/FieldType";
import { Map } from "immutable";
import { BaseStore } from "./data/baseStore";

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

// export type FieldMap<T> = Map<keyof T, Field<T>>;

export class FieldMap<T extends IHasId> {
  private map: Map<keyof T, Field<T>> = Map()

  private store: BaseStore<T> | undefined

  public set(key: keyof T, value: Field<T>) {
    this.map = this.map.set(key, value)
  }

  public get(key: keyof T) {
    return this.map.get(key)
  }

  public toArray() {
    return this.map.toArray()
  }

  public renderFields(entity: T, onChange: (entity: T, field: keyof T ) => (value: T[keyof T]) => void) {
    return this.map.toArray().map(field => {
      const fieldName: keyof T = field.fieldName
      return field.render({ 
        onChange: onChange(entity, fieldName),
        value: entity[fieldName],
      })
    });
  }
}

export enum FieldType {
  num = "Number",
  str = "String",
  text = "Text",
  bool = "Boolean",
  userName = "username",
  email = "email",
  entity = "Entity"
}
