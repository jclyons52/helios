import * as faker from "faker";
import { Note } from "./Note";
import { Factory } from "../base/Factory";

export class NoteFactory extends Factory<Note> {
  public create({
    id = Math.random(),
    title = faker.lorem.sentence(),
    body = faker.lorem.paragraphs(3)
  }: Partial<Note>): Note {
    return new Note(id, title, body);
  }
}
