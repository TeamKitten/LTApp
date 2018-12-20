import * as React from "react";
import * as ReactSwipe from "react-swipe";
import styled from "styled-components";
import { SpeakerCard } from "../../components/SpeakerCard";
import { IParticipant } from "../../models/Participant";
import { ISession } from "../../models/Session";

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
  sessions: ISession[];
  participants: IParticipant[];
}

const participant = (participants: IParticipant[], id: string) =>
  participants.filter(p => p.fields.participantId === id)[0].fields;

export const Speakers = (props: IProps) => (
  <Wrapper>
    <ReactSwipe
      key={props.sessions.length}
      swipeOptions={{ continuous: false }}
    >
      {props.sessions.map(item => (
        <SpeakerCardItem className="session" key={item.sys.id}>
          <SpeakerCard
            participant={participant(
              props.participants,
              item.fields.participantId
            )}
            session={item.fields}
          />
        </SpeakerCardItem>
      ))}
    </ReactSwipe>
  </Wrapper>
);
