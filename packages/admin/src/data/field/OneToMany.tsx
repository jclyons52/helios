import React from "react";
import { Class, FieldType } from "../../types";
import { modules } from "../../decorators";
import { Field, IFieldProps } from "../FieldType";
import { IModule } from "../Module";

export class OneToMany<T, V> extends Field<T> {
    public type: FieldType = FieldType.entity;
    constructor(public fieldName: keyof T, public fieldValue: T[keyof T], public classRef: Class<V>) {
      super(fieldName);
    }
  
    public listFormatter = (arr: V[]) =>  {
      return <span>{arr.length}</span>
    }
  
    public fake() {
      const m: IModule<any> | undefined = modules.find(
        mm => mm.name === this.classRef.name
      );
      if (m) {
        return m.factory.createMany(3);
      }
      return null;
    }

    public render(props: IFieldProps) {
      const m: IModule<any> | undefined = modules.find(
        mm => mm.name === this.classRef.name
      );
      if (!m) {
        return (<span>module not found</span>)
      }
      return (
        <form className="form-inline" >{m.fields.renderFields(this.fieldValue, m.store.onChange)}</form>
      )
    }
  }