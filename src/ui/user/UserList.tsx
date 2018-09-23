import { observer } from "mobx-react";
import React, { Component } from "react";
import { Consumer } from "../../Context";
import { User } from "../../data/user/User";
import { IUserStore } from "../../data/user/UserStore";
import { List } from "../../framework/ui/List";

export const UserList = () => (
  <Consumer>{c => <UserListComponent userStore={c.userStore} />}</Consumer>
);

interface IProps {
  userStore: IUserStore;
}

@observer
export class UserListComponent extends Component<IProps, any> {
  public render() {
    return (
      <List<User>
        headings={["id", "username", "email"]}
        formatters={{ body: (b: string) => b.slice(0, 50) }}
        values={this.props.userStore.users}
      />
    );
  }
}