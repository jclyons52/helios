import { ApiDriver, IConfig } from "../../data/Config";
import { BaseStore } from "./baseStore";
import { IFactory } from "./Factory";
import { FakeRestApi, IHasId, IRestApi } from "./RestApi";

export interface IModule<T> {
  store: BaseStore<T>;
  api: IRestApi<T>;
  factory: IFactory<T>;
}

export abstract class BaseModule<T extends IHasId> implements IModule<T> {
  public api: FakeRestApi<T>;
  public store: BaseStore<T>;
  public factory: IFactory<T>;
  constructor(private config: IConfig) {
    this.factory = this.factoryFactory();
    this.api = this.apiFactory();
    this.store = new BaseStore<T>(this.api);
    this.store.load();
  }

  protected apiFactory(): FakeRestApi<T> {
    switch (this.config.apiDriver) {
      case ApiDriver.Fake:
        return new FakeRestApi<T>(this.factory);
      default:
        return new FakeRestApi<T>(this.factory);
    }
  }

  protected abstract factoryFactory(): IFactory<T>;
}
