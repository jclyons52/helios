import { Container } from "inversify";
import { IModule } from "./data/Module";
import { modules } from "./decorators"
import { Endpoint } from "./Endpoint";
import * as entities from "./entities"
export class Kernel {

    private container = new Container()
    private modules: Array<IModule<any>> = modules

    public boot() {
        this.modules.map(m => m.register(this.container))
        this.modules.map(m => m.boot(this.container))
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