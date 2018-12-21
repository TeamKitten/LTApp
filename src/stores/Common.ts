import { observable } from "mobx";

export interface ICommonStore {
  title: string;
  openDate: Date;
  closeDate: Date;
}

export class CommonStore implements ICommonStore {
  @observable public title: string = "";

  @observable public openDate: Date = new Date("2019/2/2 13:30");

  @observable public closeDate: Date = new Date("2019/2/2 16:30");
}
