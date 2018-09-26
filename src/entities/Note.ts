import { observable } from "mobx";
import { FieldType } from "../framework/data/FieldType";
import { field, Resource } from "../framework/decorators";

@Resource({ baseUrl: "/notes" })
export class Note {
  @field()
  @observable
  public id: number;

  @field()
  @observable
  public title: string;

  @field(FieldType.text)
  @observable
  public body: string;
}
