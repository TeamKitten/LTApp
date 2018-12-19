import * as contentful from "contentful";
import { observable } from "mobx";

const client = contentful.createClient({
  space: "dv2s5i251t5w",
  accessToken:
    "9ed4fd0fd7f657e0217ca891351ec7fe99380274d5ae0c494dbcac9109ff86a3"
});

export interface IContentfulStore {
  speakers: any[];
  error: Error | null;
  fetchSpeakers: () => Promise<void>;
}

export class ContentfulStore implements IContentfulStore {
  @observable public speakers: any[] = [];

  @observable public error: Error | null = null;

  public async fetchSpeakers() {
    this.error = null;
    const entries = await client
      .getEntries({
        content_type: "speaker"
      })
      .catch(err => {
        this.error = err;
        return;
      });
    if (entries) {
      this.speakers = entries.items;
    }
  }
}
