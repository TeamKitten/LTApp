import { createClient, Entry } from "contentful";
import { observable } from "mobx";
import { ISpeakerFields } from "../models/Speaker";

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE as string,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN as string
});

export interface IContentfulStore {
  speakers: Array<Entry<ISpeakerFields>>;
  error: Error | null;
  fetchSpeakers: () => Promise<void>;
}

export class ContentfulStore implements IContentfulStore {
  @observable public speakers: Array<Entry<ISpeakerFields>> = [];

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
      this.speakers = entries.items as Array<Entry<ISpeakerFields>>;
    }
  }
}
