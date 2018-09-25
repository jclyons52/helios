import { FieldType } from "../../framework/data/FieldType";
import { field } from "../../framework/decorators";

export class User {
  @field<User>()
  public id: number;

  @field<User>(FieldType.userName)
  public username: string;

  @field<User>(FieldType.email)
  public email: string;
}
