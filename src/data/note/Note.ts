import { FieldType } from "../../framework/data/FieldType";
import { field } from "../../framework/decorators";

export class Note {
  @field<Note>()
  public id: number;
  @field<Note>()
  public title: string;
  @field<Note>(FieldType.text)
  public body: string;
}
