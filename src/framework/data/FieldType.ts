
export enum FieldType {
    num = 'Number',
    str = "String",
    text = "Text",
    bool = "Boolean"
}

export class Field<T> {
    constructor(public fieldName: keyof T, public type: FieldType) {}
}