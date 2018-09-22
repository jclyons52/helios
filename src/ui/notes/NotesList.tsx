import { observer } from "mobx-react";
import React, { Component } from "react";
import { Consumer } from "../../Context";
import { INoteStore } from "../../data";
import { Note } from "../../data/note/Note";
import { List } from "../List";

export const NotesList = () => (
  <Consumer>{c => <NotesListComponent noteStore={c.noteStore} />}</Consumer>
);

interface IProps {
  noteStore: INoteStore;
}

@observer
export class NotesListComponent extends Component<IProps, any> {
  public render() {
    return (
      <List<Note>
        headings={["id", "title", "body"]}
        formatters={{ body: (b: string) => b.slice(0, 50) }}
        values={this.props.noteStore.notes}
      />
    );
  }
}
