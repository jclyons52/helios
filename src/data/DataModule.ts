import { IConfig } from "./Config"
import { InternalContainer } from "./InternalContainer";


export class DataModule {
    private internalContainer: InternalContainer;
    constructor(config: IConfig){
        this.internalContainer = new InternalContainer(config)
    }

    public get noteStore() {
        return this.internalContainer.noteStore
    }
}