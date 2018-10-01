import { BoolField } from "./field/BoolField";
import { NumberField } from "./field/NumberField";
import { StringField } from "./field/StringField";
import { TextField } from "./field/TextField";
import { FieldType } from "../types";
import { Field, UsernameField, EmailField } from "./FieldType";

export class FieldFactory {
    public static create<T>(
        fieldName: keyof T & string,
        type: FieldType
      ): Field<T> {
        switch (type) {
          case FieldType.str:
            return new StringField<T>(fieldName);
          case FieldType.text:
            return new TextField<T>(fieldName);
          case FieldType.userName:
            return new UsernameField<T>(fieldName);
          case FieldType.email:
            return new EmailField<T>(fieldName);
          case FieldType.num:
            return new NumberField<T>(fieldName);
          case FieldType.bool:
            return new BoolField<T>(fieldName);
          default:
            return new StringField<T>(fieldName);
        }
      }
}