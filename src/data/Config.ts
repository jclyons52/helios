

export enum ApiDriver {
    Real,
    Fake
}

export interface IConfig {
    apiDriver: ApiDriver
}

export class Config implements IConfig {
    constructor(public apiDriver: ApiDriver) {}
}