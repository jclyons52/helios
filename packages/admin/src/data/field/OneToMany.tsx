import React from "react";
import { Class, FieldType } from "../../types";
import { modules } from "../../decorators";
import { Field, IFieldProps } from "../FieldType";
import { IModule } from "../Module";
import { IHasId } from "../RestApi";

export class OneToMany<T, V extends IHasId> extends Field<T> {
    public type: FieldType = FieldType.entity;
    constructor(public fieldName: keyof T, public fieldValue: Array<V>, public classRef: Class<V>) {
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
      const m: IModule<V> | undefined = modules.find(
        mm => mm.name === this.classRef.name
      );
      if (!m) {
        return (<span>module not found</span>)
      }
      return props.value.map((val: V) => (
          <form className="form-inline" >{m.fields.renderFields(val, m.store.onChange)}</form>
        ))
    }
  }