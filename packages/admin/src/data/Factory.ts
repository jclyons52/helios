import { Class } from "../types";
import { Field } from "./FieldType";
import { FieldMap } from "../types";

export interface IFactory<T> {
  create(entity: Partial<T>): T;
  createMany(count: number, entity?: Partial<T>): T[];
}

export abstract class Factory<T> implements IFactory<T> {
  public createMany(count = 1, defaults: Partial<T> = {}): T[] {
    return Array(count)
      .fill(undefined)
      .map(() => this.create(defaults));
  }

  public abstract create(params: Partial<T>): T;
}

// tslint:disable-next-line:max-classes-per-file
export class BaseFactory<T extends {}> extends Factory<T> {
  constructor(private classRef: Class<T>, private fields: FieldMap<T>) {
    super();
  }

  public create(params: Partial<T>): T {
    // @ts-ignore
    const entity = new this.classRef();
    this.fields.toArray().map(field => {
      entity[field.fieldName] = field.fake()
    });
    return entity;
  }
}
