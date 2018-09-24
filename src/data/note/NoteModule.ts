import { IFactory } from "../../framework/data/Factory";
import { BaseModule } from "../../framework/data/Module";
import { Note } from "./Note";
import { NoteFactory } from "./NoteFactory";

export class NoteModule extends BaseModule<Note> {
    protected factoryFactory(): IFactory<Note> {
        return new NoteFactory()
    }
}