import { FieldType } from "../framework/data/FieldType";
import { field, Form } from "../framework/decorators";

@Form()
export class Note {
  @field()
  public id: number;

  @field()
  public title: string;

  @field(FieldType.text)
  public body: string;
}
