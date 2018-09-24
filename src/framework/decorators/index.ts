import { FieldType } from "../data/FieldType";

export const metadata = {};

export function logType(fieldType?: FieldType) {
  return (target: any, key: string) => {
    const t = Reflect.getMetadata("design:type", target, key);
    const name = target.constructor.prototype.constructor.name;
    if (!metadata[name]) {
      metadata[name] = {};
    }
    metadata[name][key] = fieldType || t.name;
  };
}
