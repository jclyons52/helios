import * as faker from "faker";
import { Class } from "../../types";
import { Field, FieldType } from "./FieldType";

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
  constructor(private classRef: Class<T>, private fields: Array<Field<T>>) {
    super();
  }

  public create(params: Partial<T>): T {
    // @ts-ignore
    const entity = new this.classRef();
    this.fields.map(field => {
      switch (field.type) {
        case FieldType.str:
          entity[field.fieldName] = faker.lorem.sentence();
          break;
        case FieldType.text:
          entity[field.fieldName] = faker.lorem.paragraph(3);
          break;
        case FieldType.num:
          entity[field.fieldName] = faker.random.number();
          break;
        case FieldType.bool:
          entity[field.fieldName] = faker.random.boolean();
          break;
        case FieldType.userName:
          entity[field.fieldName] = faker.internet.userName();
          break;
        case FieldType.email:
          entity[field.fieldName] = faker.internet.email();
          break;
      }
    });
    return entity;
  }
}
