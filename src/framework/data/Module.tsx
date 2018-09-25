import { Container } from "inversify";
import React from "react"
import { Class } from "../../types";
import { metadata } from "../decorators";
import { Endpoint } from "../Endpoint";
import { Edit } from "../ui/Edit";
import { Panel } from "../ui/Panel";
import { BaseStore } from "./baseStore";
import { BaseFactory, IFactory } from "./Factory";
import { Field } from "./FieldType";
import { FakeRestApi, IHasId, IRestApi } from "./RestApi";

export interface IModule<T> {
  name: string
  store: BaseStore<T>;
  api: IRestApi<T>;
  factory: IFactory<T>;
  endpoints: Endpoint[]
  fields: Array<Field<T>>

  register(c: Container): void
  boot(c: Container): void
}

export class BaseModule<T extends IHasId> implements IModule<T> {

  public name: string;
  public api: FakeRestApi<T>;
  public store: BaseStore<T>;
  public factory: IFactory<T>;
  public endpoints: Endpoint[] = []
  public fields: Array<Field<T>>
  constructor(classRef: Class<T>) {
    this.name = classRef.name
    this.fields = metadata[this.name]
    this.factory = new BaseFactory<T>(classRef, this.fields)
    this.api = this.apiFactory();
    this.store = new BaseStore<T>(this.api);
    this.store.load();
    this.endpoints = this.getEndpoints()
  }

  public register(c: Container): void {
    c.bind<IFactory<T>>(this.name+"factory").to(BaseFactory)
  }
  public boot(c: Container): void {
    throw new Error("Method not implemented.");
  }

  protected apiFactory(): FakeRestApi<T> {
    return new FakeRestApi<T>(this.factory);
  }

  protected getEndpoints() {
    return [
    new Endpoint(() => `/${this.name.toLowerCase()}`, this.name, this.listView, true),
    new Endpoint(() => `/${this.name.toLowerCase()}/edit`, `Edit ${this.name}`, this.editView, false, false),

    ]
  }

  protected editView = () => {
    return (
      <Edit<T>
        entity={this.store.entities[0]}
        fields={this.fields}
      />
    )
  }

  protected listView = () => {
    return (
      <Panel<T> 
      headings={this.fields.map(f => f.fieldName)} 
      formatters={{}}
      name={this.name}
      store={this.store}
      />
    )
  }

}
