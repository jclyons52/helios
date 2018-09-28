import React from "react";
import { Link } from "react-router-dom";
import { Class, Formatter } from "../../types";
import { modules } from "../../decorators";
import { Field, FieldType, IFieldProps } from "../FieldType";
import { IModule } from "../Module";
import { IHasId } from "../RestApi";

export class ManyToOne<T, V extends IHasId> extends Field<T> {
    public type: FieldType = FieldType.entity;
    constructor(
      public fieldName: keyof T & string,
      public classRef: Class<V>,
      public formatter: Formatter
    ) {
      super(fieldName);
    }
  
    public listFormatter = (obj: V) => {
      const m: IModule<any> | undefined = modules.find(
        mm => mm.name === this.classRef.name
      );
      if (!m) {
        return <span>{obj.toString()}</span>
      }
      return <Link to={m.editRoute(String(obj.id))} >{obj.toString()}</Link> 
    }
  
    public fake() {
      const m: IModule<any> | undefined = modules.find(
        mm => mm.name === this.classRef.name
      );
      if (m) {
        return m.factory.create({});
      }
      return null;
    }
    public render(props: IFieldProps) {
      return (
        <div className="form-group">
          <label htmlFor={this.fieldName}>{this.fieldName}</label>
          <input
            type="text"
            value={props.value}
            onChange={this.onChange(props.onChange)}
            id={this.fieldName}
            className="form-control"
          />
        </div>
      );
    }
  }