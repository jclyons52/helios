import { IModule } from "./framework/data/Module";
import { IHasId } from "./framework/data/RestApi";

// tslint:disable-next-line:ban-types
type Abstract<T> = Function & { prototype: T };
type Constructor<T> = new () => T;
export type Class<T> = Abstract<T> | Constructor<T>;

export type Formatter = (val: any) => string
 
export interface IFormatterMap { [name: string]: Formatter }

export type ModuleParams<T extends IHasId> = { baseUrl: string } & Partial<IModule<T>>
 