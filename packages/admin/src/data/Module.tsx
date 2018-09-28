import { decorate, observable } from "mobx";
import React from "react";
import { RouteComponentProps } from "react-router";
import { Class, ModuleParams } from "../types";
import { metadata } from "../decorators";
import { Endpoint } from "../Endpoint";
import { Edit } from "../ui/Edit";
import { Panel } from "../ui/Panel";
import { BaseStore } from "./baseStore";
import { BaseFactory, IFactory } from "./Factory";
import { Field } from "./FieldType";
import { FakeRestApi, IHasId, IRestApi } from "./RestApi";

export interface IModule<T extends IHasId> {
  name: string;
  baseUrl: string;
  store: BaseStore<T>;
  api: IRestApi<T>;
  factory: IFactory<T>;
  endpoints: Endpoint[];
  fields: Array<Field<T>>;
  editRoute(id?: string): string
}

export class BaseModule<T extends IHasId> implements IModule<T> {
  public baseUrl: string;

  public name: string;
  public api: IRestApi<T>;
  public store: BaseStore<T>;
  public factory: IFactory<T>;
  public endpoints: Endpoint[] = [];
  public fields: Array<Field<T>>;
  constructor(classRef: Class<T>, c: ModuleParams<T>) {
    this.baseUrl = c.baseUrl;
    this.name = c.name || classRef.name;
    this.fields = c.fields || metadata[this.name];
    this.makeObservable(classRef)
    this.factory = c.factory || new BaseFactory<T>(classRef, this.fields);
    this.api = c.api || this.apiFactory();
    this.store =
      c.store ||
      (() => {
        const store = new BaseStore<T>(this.api);
        store.load();
        return store;
      })();
    this.endpoints = this.getEndpoints();
  }


  public editRoute = (id: string = ":id") => `/${this.name.toLowerCase()}/edit/${id}`

  protected apiFactory(): FakeRestApi<T> {
    return new FakeRestApi<T>(this.factory);
  }

  protected getEndpoints() {
    return [
      new Endpoint(
        () => `/${this.name.toLowerCase()}`,
        this.name,
        this.listView,
        true
      ),
      new Endpoint(
        this.editRoute,
        `Edit ${this.name}`,
        // @ts-ignore
        this.editView,
        false,
        false
      )
    ];
  }

  protected editView = (props: RouteComponentProps<any>) => {
    const id = props.match.params.id
    const eId = id ? Number(id) : 0
    const entity = this.store.find(eId)
    if(!entity) {
      props.history.push("/")
      return
    }
    return (
      <Edit<T>
        entity={entity}
        fields={this.fields}
        store={this.store}
      />
    );
  };

  protected listView = (props: RouteComponentProps) => {
    return (
      <Panel<T>
        fields={this.fields}
        name={this.name}
        store={this.store}
        {...props}
      />
    );
  };

  private makeObservable = (ref: Class<T>) => {
    // @ts-ignore
    const obj = this.fields.reduce((carry, item) => {
    // @ts-ignore
      carry[item.fieldName] = observable
      return carry
    }, {})
    decorate(ref, obj)
  }
}
