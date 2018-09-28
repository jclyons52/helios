import { ComponentType } from "react";
import { RouteComponentProps } from "react-router";

type Url = (...args: string[]) => string;

export class Endpoint {
  constructor(
    public url: Url,
    public label: string,
    public component: ComponentType<RouteComponentProps<any>>,
    public exact: boolean = false,
    public showInSidebar: boolean = true
  ) {}
}
