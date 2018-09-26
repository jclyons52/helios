import { Container } from "inversify";
import React from "react"
import { RouteComponentProps } from "react-router";
import { Class, IFormatterMap } from "../../types";
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
  listFormatters: IFormatterMap
  register(c: Container): void
  boot(c: Container): void
}

export class BaseModule<T extends IHasId> implements IModule<T> {
  public listFormatters: IFormatterMap = {};

  public name: string;
  public api: IRestApi<T>;
  public store: BaseStore<T>;
  public factory: IFactory<T>;
  public endpoints: Endpoint[] = []
  public fields: Array<Field<T>>
  constructor(classRef: Class<T>, c: Partial<IModule<T>>) {
    this.name = c.name || classRef.name
    this.fields = c.fields || metadata[this.name]
    this.factory = c.factory || new BaseFactory<T>(classRef, this.fields)
    this.api = c.api || this.apiFactory();
    this.store = c.store || (() => {
      const store = new BaseStore<T>(this.api);
      store.load();
      return store
    })()
   this.fields.map(f => f.listFormatter(this.listFormatters))
    this.endpoints = this.getEndpoints()
  }

  public register(c: Container): void {
   // tslint:disable-next-line:no-console
   console.log(c)
  }
  public boot(c: Container): void {
    // tslint:disable-next-line:no-console
    console.log(c)
  }

  protected apiFactory(): FakeRestApi<T> {
    return new FakeRestApi<T>(this.factory);
  }

  protected getEndpoints() {
    return [
    new Endpoint(() => `/${this.name.toLowerCase()}`, this.name, this.listView, true),
    new Endpoint(() => `/${this.name.toLowerCase()}/edit/:id`, `Edit ${this.name}`, this.editView, false, false),

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

  protected listView = (props: RouteComponentProps) => {
    return (
      <Panel<T> 
      headings={this.fields.map(f => f.fieldName)} 
      formatters={this.listFormatters}
      name={this.name}
      store={this.store}
      {...props}
      />
    )
  }

}
