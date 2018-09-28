import { observable } from "mobx";
import { SyntheticEvent } from "react";

export interface ISearchStore {
  readonly searchText: string;
  updateSearch(e: SyntheticEvent<HTMLInputElement>): void;
}

export class SearchStore {
  @observable
  public searchText: string = "";

  public updateSearch = (e: SyntheticEvent<HTMLInputElement>) => {
    this.searchText = e.currentTarget.value;
  };
}
