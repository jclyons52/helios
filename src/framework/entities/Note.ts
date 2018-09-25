import { FieldType } from "../data/FieldType";
import { field, Form } from "../decorators";

@Form()
export class Note {
  @field<Note>()
  public id: number;
  @field<Note>()
  public title: string;
  @field<Note>(FieldType.text)
  public body: string;
}
