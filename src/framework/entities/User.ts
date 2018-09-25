import { FieldType } from "../data/FieldType";
import { field, Form } from "../decorators";

@Form()
export class User {
  @field<User>()
  public id: number;

  @field<User>(FieldType.userName)
  public username: string;

  @field<User>(FieldType.email)
  public email: string;
}
