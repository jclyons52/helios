import { Class } from "../../types";

export enum FieldType {
    num = 'Number',
    str = "String",
    text = "Text",
    bool = "Boolean",
    userName = "username",
    email = "email",
    entity = "Entity"
}

export class Field<T> {
    constructor(public fieldName: keyof T & string, public type: FieldType) {}
}

// tslint:disable-next-line:max-classes-per-file
export class NumberField<T> extends Field<T> {}

// tslint:disable-next-line:max-classes-per-file
export class StringField<T> extends Field<T> {}

// tslint:disable-next-line:max-classes-per-file
export class TextField<T> extends Field<T> {}

// tslint:disable-next-line:max-classes-per-file
export class BoolField<T> extends Field<T> {}
// tslint:disable-next-line:max-classes-per-file
export class EntityField<T> extends Field<T> {
    constructor(public fieldName: keyof T & string, public type: FieldType, public classRef: Class<T>) {
        super(fieldName, type)
    }
}