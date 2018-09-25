import { Container } from "inversify";
import { IModule } from "./data/Module";

export class Kernel {

    private container = new Container()
    private modules: Array<IModule<any>>

    public boot() {
        this.modules.map(m => m.register(this.container))
        this.modules.map(m => m.boot(this.container))
    }
}