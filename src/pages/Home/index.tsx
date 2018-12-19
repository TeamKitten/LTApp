import * as React from "react";
import { CountDown } from "../../components/Countdown";
import { ICommonStore } from "../../stores/Common";

interface ISpeakerOrCountdownProps {
  openDate: Date;
  closeDate: Date;
}

const SpeakerOrCountDown = (props: ISpeakerOrCountdownProps) => {
  const now = new Date();
  return now.getTime() < props.openDate.getTime() ? (
    <CountDown openDate={props.openDate} closeDate={props.closeDate} />
  ) : (
    <h1>Not implemented</h1>
  );
};

interface IProps {
  commonState: ICommonStore;
}

export const Home = (props: IProps) => (
  <section>
    <SpeakerOrCountDown
      closeDate={props.commonState.closeDate}
      openDate={props.commonState.openDate}
    />
  </section>
);
