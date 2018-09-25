import { observer } from "mobx-react";
import React, { Component } from "react"
import { Redirect, Route } from "react-router";
import { Consumer } from "../../Context";
import { Endpoint } from "../Endpoint";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

export const Layout = () => (<Consumer>{c => <LayoutComponent endpoints={c.endpoints} />}</Consumer>)

interface IProps {
    endpoints: Endpoint[]
}

@observer
export class LayoutComponent extends Component<IProps, any>{
    public render() {
        const { endpoints } = this.props
        return [
            <Navbar key={1} />,
            <div key={2} className="container-fluid">
              <div className="row">
                <Sidebar endpoints={endpoints} />
                <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                  {endpoints.map(endpoint => (
                    <Route
                      path={endpoint.url()}
                      component={endpoint.component}
                      exact={endpoint.exact}
                    />
                  ))}
                  <Redirect from="/" to={"/notes"} />
                </main>
              </div>
            </div>
          ];
    }
}