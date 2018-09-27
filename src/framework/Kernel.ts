import * as entities from "../entities"
import { IModule } from "./data/Module";
import { modules } from "./decorators"
import { Endpoint } from "./Endpoint";
export class Kernel {

    private modules: Array<IModule<any>> = modules

    // tslint:disable-next-line:no-empty
    public boot() {
    }

    public get entities() {
        return entities
    }

    public get endpoints(): Endpoint[] {
        return this.modules.reduce((carry, item) => { 
            return [...carry, ...item.endpoints]
         }, [])
    }
}