import { field, FieldType, Resource } from "@typewryter/admin";

@Resource({ baseUrl: "/notes" })
export class Note {
  @field()
  public id: number;

  @field()
  public title: string;

  @field(FieldType.text)
  public body: string;
}
