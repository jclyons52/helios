import { logType } from "../../framework/decorators";

export class Note {
  @logType 
  public id: number 
  public title: string
   public body: string

   constructor(id: number, title: string, body: string){
     this.id = id
     this.title = title
     this.body = body
   }
}
