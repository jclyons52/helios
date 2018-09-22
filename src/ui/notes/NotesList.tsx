import { observer } from "mobx-react";
import React, { Component } from "react";
import { Consumer } from "../../Context";
import { INoteStore } from "../../data";

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
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>title</th>
              <th>body</th>
            </tr>
          </thead>
          <tbody>
            {this.props.noteStore.notes.map(note => (
              <tr>
                <td>{note.id}</td>
                <td>{note.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
