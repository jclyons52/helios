import { FieldType } from "../framework/data/FieldType";
import { field, Resource } from "../framework/decorators";

@Resource({ baseUrl: "/notes" })
export class Note {
  @field()
  public id: number;

  @field()
  public title: string;

  @field(FieldType.text)
  public body: string;
}
