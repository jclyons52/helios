import { IConfig } from "../../data/Config";
import { Class } from "../../types";
import { Field, FieldType } from "../data/FieldType";
import { BaseModule, IModule } from "../data/Module";
import { IHasId } from "../data/RestApi";

export const metadata = {};

export const modules: Array<IModule<any>> = []

export function field<T>(fieldType?: FieldType) {
  // tslint:disable-next-line:ban-types
  return (target: Function, key: keyof T & string) => {
    const t = Reflect.getMetadata("design:type", target, key);
    const name = target.constructor.prototype.constructor.name;
    if (!metadata[name]) {
      metadata[name] = [];
    }
    metadata[name].push(new Field<T>(key, fieldType || t.name))
  };
}


export function module<T extends IHasId>(config: IConfig) {
  return (target: Class<T>) => {
    const m = new BaseModule<T>(config, target);
    modules.push(m);
  }
}

