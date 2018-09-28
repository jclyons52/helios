import { Class, Formatter, ModuleParams } from "../../types";
import { ManyToOne } from "../data/field/ManyToOne";
import { OneToMany } from "../data/field/OneToMany";
import { Field, FieldType } from "../data/FieldType";
import { BaseModule, IModule } from "../data/Module";
import { IHasId } from "../data/RestApi";

export const metadata = {};

export const modules: Array<IModule<any>> = []

export function field(fieldType?: FieldType) {
  return <T>(target: T, key: keyof T & string) => {
    const t = Reflect.getMetadata("design:type", target, key);
    // tslint:disable-next-line:no-console
    console.log(t, target, key)
    const name = target.constructor.prototype.constructor.name;
    if (!metadata[name]) {
      metadata[name] = [];
    }
    metadata[name].push(Field.create<T>(key, fieldType || t.name))
  };
}

export function manyToOne<V extends IHasId>(classRef: Class<V>, formatter: Formatter = (obj: Object) => obj.toString()) {
  return <T>(target: any, key: keyof T & string) => {
    const t = Reflect.getMetadata("design:type", target, key);
    // tslint:disable-next-line:no-console
    console.log(t)
    const name = target.constructor.prototype.constructor.name;
    if (!metadata[name]) {
      metadata[name] = [];
    }
    metadata[name].push(new ManyToOne<T, V>(key, classRef, formatter))
  };
}


export function oneToMany<V>(classRef: Class<V>) {
  return <T>(target: any, key: keyof T & string) => {
    const t = Reflect.getMetadata("design:type", target, key);
    // tslint:disable-next-line:no-console
    console.log(t)
    const name = target.constructor.prototype.constructor.name;
    if (!metadata[name]) {
      metadata[name] = [];
    }
    metadata[name].push(new OneToMany<T, V>(key, classRef))
  };
}

export function Resource<T extends IHasId>(config: ModuleParams<T>) {
  return (target: Class<T>) => {
    const m = new BaseModule<T>(target, config);
    modules.push(m);
  }
}

