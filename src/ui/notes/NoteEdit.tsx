import React, { Component } from "react";

export class NoteEdit extends Component<any, any> {
  public render() {
    return (
      <div className="row">
        <div className="col-md-8 order-md-1">
          <h4 className="mb-3">Billing address</h4>
          <form className="needs-validation">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Username"
              />
              <div className="invalid-feedback">Your username is required.</div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
