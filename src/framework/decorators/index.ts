export function logType(target: any, key: string) {
  const t = Reflect.getMetadata("design:type", target, key);
  // tslint:disable-next-line:no-console
  console.log(`${key} type: ${t.name}`);
}