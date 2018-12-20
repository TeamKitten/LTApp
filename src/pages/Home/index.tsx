import { Entry } from "contentful";
import * as React from "react";
import { CountDown } from "../../components/Countdown";
import { CurrentSession } from "../../components/CurrentSession";
import { ISpeakerFields } from "../../models/Speaker";
import { ICommonStore } from "../../stores/Common";
import { IContentfulStore } from "../../stores/Contentful";

interface ISpeakerOrCountdownProps {
  openDate: Date;
  closeDate: Date;
  speakers: Array<Entry<ISpeakerFields>>;
}

const SpeakerOrCountDown = (props: ISpeakerOrCountdownProps) => {
  const now = Date.now();
  const currentSession = props.speakers.filter(s => {
    const sessionEndDate = new Date(s.fields.time);
    const timeRange = s.fields.long ? 10 : 5;
    sessionEndDate.setMinutes(sessionEndDate.getMinutes() + timeRange);
    const diff = sessionEndDate.getTime() - now;
    const min = Math.floor(diff / 60000);
    return min >= 0 && min <= timeRange;
  });

  return now < props.openDate.getTime() || now > props.closeDate.getTime() ? (
    <CountDown openDate={props.openDate} closeDate={props.closeDate} />
  ) : currentSession.length ? (
    <CurrentSession currentSession={currentSession[0]} />
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
      speakers={props.contentfulStore.speakers}
    />
  </section>
);
