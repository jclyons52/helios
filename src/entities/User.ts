import { FieldType } from "../framework/data/FieldType";
import { field, Form } from "../framework/decorators";

@Form()
export class User {
  @field()
  public id: number;

  @field(FieldType.userName)
  public username: string;

  @field(FieldType.email)
  public email: string;
}
