import { observer } from "mobx-react";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Endpoint } from "../Endpoint";

export interface ISidebarProps {
  endpoints: Endpoint[]
}

@observer
export class Sidebar extends Component<ISidebarProps, any> {
  public render() {
    return (
      <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
          <ul className="nav flex-column">
            {this.props.endpoints.filter(e => e.showInSidebar).map(endpoint => (
              <li key={endpoint.url()} className="nav-item">
                <NavLink to={endpoint.url()} className="nav-link active">
                  {endpoint.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}
