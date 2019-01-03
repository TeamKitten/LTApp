import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { ISessionFields } from "src/models/Session";
import styled from "styled-components";
import { IParticipantFields } from "../../models/Participant";
import { getEndStr, getStartStr } from "../../utils/date";

interface IStyledCardProps {
  imageUrl: string;
}

const Card = styled.div`
  background: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  width: 75vw;
  height: 70vh;
  border-radius: 32px;
  background: ${(props: IStyledCardProps) => `url(${props.imageUrl})`};
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
  background-repeat: no-repeat;
  transition: box-shadow 0.25s;
  &:active {
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.25);
  }
`;

const CardInner = styled.div`
  background: rgba(0, 0, 0, 0.25);
  border-radius: 32px;
  height: 100%;
  color: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;
  padding: 32px;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 8px;
`;
const SpeakerName = styled.h2`
  font-weight: bold;
  margin-bottom: 8px;
`;
const SpeakTime = styled.h3`
  margin-left: 4px;
`;

const WithIconTextWrapper = styled.div`
  display: flex;
  opacity: 0.75;
  margin-bottom: 8px;
  &:last-child {
    margin-bottom: 0;
  }
`;

interface IProps {
  participant: IParticipantFields;
  session: ISessionFields;
}

export const SpeakerCard = (props: IProps) => (
  <Card imageUrl={props.participant.avatar.fields.file.url}>
    <CardInner>
      <Title id="sessionTitle">{props.session.title}</Title>
      <SpeakerName id="speakerName">{props.participant.name}</SpeakerName>
      <WithIconTextWrapper>
        <FontAwesomeIcon icon="clock" />
        <SpeakTime id="speakTime">
          {getStartStr(props.session.startAt)}-
          {getEndStr(props.session.startAt, props.session.long)}
        </SpeakTime>
      </WithIconTextWrapper>
      <WithIconTextWrapper>
        <FontAwesomeIcon icon="stopwatch" />
        <SpeakTime id="speakDuration">
          {props.session.long ? "10min" : "5min"}
        </SpeakTime>
      </WithIconTextWrapper>
    </CardInner>
  </Card>
);
