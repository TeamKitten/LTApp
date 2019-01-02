import { Entry } from "contentful";
import * as React from "react";
import { CountDown } from "../../components/Countdown";
import { CurrentSession } from "../../components/CurrentSession";
import { IParticipant, IParticipantFields } from "../../models/Participant";
import { ISessionFields } from "../../models/Session";
import { ICommonStore } from "../../stores/Common";
import { IContentfulStore } from "../../stores/Contentful";

interface ISpeakerOrCountdownProps {
  openDate: Date;
  closeDate: Date;
  sessions: Array<Entry<ISessionFields>>;
  participants: Array<Entry<IParticipantFields>>;
}

const participant = (participants: IParticipant[], id: string) =>
  participants.filter(p => p.fields.participantId === id)[0].fields;

const SpeakerOrCountDown = (props: ISpeakerOrCountdownProps) => {
  const now = Date.now();
  const currentSession = props.sessions.filter(s => {
    const sessionEndDate = new Date(s.fields.startAt);
    const timeRange = s.fields.long ? 15 : 10;
    sessionEndDate.setMinutes(sessionEndDate.getMinutes() + timeRange);
    const diff = sessionEndDate.getTime() - now;
    const min = Math.floor(diff / 60000);
    return min >= 0 && min <= timeRange;
  });

  return now < props.openDate.getTime() || now > props.closeDate.getTime() ? (
    <CountDown openDate={props.openDate} closeDate={props.closeDate} />
  ) : currentSession.length ? (
    <CurrentSession
      currentSession={currentSession[0]}
      currentSessionSpeaker={participant(
        props.participants,
        currentSession[0].fields.participantId
      )}
    />
  ) : (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold",
        height: "calc(100vh - 48px - 48px)"
      }}
    >
      <h1 id="noSessions">開催中のセッションはありません。</h1>
    </div>
  );
};

interface IProps {
  commonStore: ICommonStore;
  contentfulStore: IContentfulStore;
}

export const Home = (props: IProps) => (
  <section>
    <SpeakerOrCountDown
      closeDate={props.commonStore.closeDate}
      openDate={props.commonStore.openDate}
      participants={props.contentfulStore.participants}
      sessions={props.contentfulStore.sessions}
    />
  </section>
);
