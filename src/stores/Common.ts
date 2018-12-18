import { observable } from "mobx";

export interface ICommonStore {
  title: string;
}

export class CommonStore implements ICommonStore {
  @observable public title: string = "";
}
