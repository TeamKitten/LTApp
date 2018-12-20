import { createClient, Entry } from "contentful";
import { observable } from "mobx";
import { IParticipantFields } from "../models/Participant";
import { ISessionFields } from "../models/Session";

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE as string,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN as string
});

export interface IContentfulStore {
  participants: Array<Entry<IParticipantFields>>;
  sessions: Array<Entry<ISessionFields>>;
  error: Error | null;
  fetch: () => Promise<void>;
}

export class ContentfulStore implements IContentfulStore {
  @observable public participants: Array<Entry<IParticipantFields>> = [];
  @observable public sessions: Array<Entry<ISessionFields>> = [];

  @observable public error: Error | null = null;

  public async fetch() {
    this.error = null;
    const sessions = await client
      .getEntries({
        content_type: "session"
      })
      .catch(err => {
        this.error = err;
        return;
      });
    const participants = await client
      .getEntries({
        content_type: "participant"
      })
      .catch(err => {
        this.error = err;
        return;
      });
    if (sessions && participants) {
      this.sessions = sessions.items as Array<Entry<ISessionFields>>;
      this.participants = participants.items as Array<
        Entry<IParticipantFields>
      >;
    }
  }
}
