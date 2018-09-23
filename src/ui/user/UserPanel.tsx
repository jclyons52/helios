import React, { Component } from "react";
import { Consumer } from "../../Context";
import { IUserStore } from "../../data/user/UserStore";
import { UserList } from "./UserList";


export const UserPanel = () => (
  <Consumer>
    {c => <UserPanelComponent userStore={c.userStore} />}
  </Consumer>
);

interface IProps {
  userStore: IUserStore;
}

export class UserPanelComponent extends Component<IProps, any> {
  public render() {
    return (
      <span>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
          <h1 className="h2">Users</h1>
        </div>
        <UserList />
      </span>
    );
  }
}
