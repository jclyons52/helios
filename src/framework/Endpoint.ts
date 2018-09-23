import { ComponentType } from "react";

type Url = (...args: string[]) => string;

export class Endpoint {
  constructor(
    public url: Url,
    public label: string,
    public component: ComponentType,
    public showInSidebar: boolean = true
  ) {}
}