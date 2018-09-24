
export const metadata = {};

export function logType(target: any, key: string) {
  const t = Reflect.getMetadata("design:type", target, key);
  // tslint:disable-next-line:no-console
  console.log(t)
  // tslint:disable-next-line:no-console
  console.log(`${key} type: ${t.name}`);
  const name = target.constructor.prototype.constructor.name;
  if (!metadata[name]) {
    metadata[name] = {};
  }
  metadata[name][key] = t.name;
}

export function logParamTypes(target : any, key : string) {
  const types = Reflect.getMetadata("design:paramtypes", target, key);
  const s = types.map((a: { name: string }) => a.name).join();
  // tslint:disable-next-line:no-console
  console.log(`${key} param types: ${s}`);
} 