import { observable } from "mobx";

export interface ICommonStore {
  title: string;
  pathname: string;
}

export class CommonStore implements ICommonStore {
  @observable public title: string = "";
  @observable public pathname: string = "";
}
