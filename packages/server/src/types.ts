type Abstract<T> = Function & { prototype: T };
type Constructor<T> = new () => T;
export type Class<T> = Abstract<T> | Constructor<T>;