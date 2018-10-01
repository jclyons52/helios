import { IModule } from "./data/Module";
import { modules } from "./decorators"
import { Endpoint } from "./Endpoint";
export class Kernel {

    private modules: Array<IModule<any>> = modules

    // tslint:disable-next-line:no-empty
    public boot(...args: any[]) {
        console.log(args)
    }

    public get endpoints(): Endpoint[] {
        return this.modules.reduce((carry: Endpoint[], item) => { 
            return [...carry, ...item.endpoints]
         }, [])
    }
}