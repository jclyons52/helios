import { field, FieldType, Resource } from "@typewryter/admin";

@Resource({ baseUrl: "/users" })
export class User {
  @field()
  public id: number;

  @field(FieldType.userName)
  public username: string;

  @field(FieldType.email)
  public email: string;

  public toString() {
    return this.username
  }
}
