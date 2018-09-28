import React from "react";
import { Class } from "../../types";
import { modules } from "../../decorators";
import { Field, FieldType, IFieldProps } from "../FieldType";
import { IModule } from "../Module";

export class OneToMany<T, V> extends Field<T> {
    public type: FieldType = FieldType.entity;
    constructor(public fieldName: keyof T & string, public classRef: Class<V>) {
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
      throw new Error("Method not implemented.");
    }
  }