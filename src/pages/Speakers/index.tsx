import * as React from "react";
import * as ReactSwipe from "react-swipe";
import styled from "styled-components";
import { SpeakerCard } from "../../components/SpeakerCard";
import { ISpeaker } from "../../models/Speaker";

const Wrapper = styled.section`
  overflow: hidden;
`;

const SpeakerCardItem = styled.div`
  min-width: 100vw;
  height: calc(100vh - 48px - 48px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

interface IProps {
  speakers: ISpeaker[];
}

export const Speakers = (props: IProps) => (
  <Wrapper>
    <ReactSwipe
      key={props.speakers.length}
      swipeOptions={{ continuous: false }}
    >
      {props.speakers.map(item => (
        <SpeakerCardItem key={item.sys.id}>
          <SpeakerCard speaker={item.fields} />
        </SpeakerCardItem>
      ))}
    </ReactSwipe>
  </Wrapper>
);
