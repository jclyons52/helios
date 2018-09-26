import { FieldType } from "../framework/data/FieldType";
import { field, Resource } from "../framework/decorators";

@Resource({ baseUrl: "/users" })
export class User {
  @field()
  public id: number;

  @field(FieldType.userName)
  public username: string;

  @field(FieldType.email)
  public email: string;
}
