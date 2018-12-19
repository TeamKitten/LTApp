import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import styled from "styled-components";
import { ISpeaker } from "../../models/Speaker";
import { getEndStr, getStartStr } from "../../utils/date";

interface IProps {
  currentSession: ISpeaker;
}

interface IWrapperProps {
  imageUrl: string;
}

const Wrapper = styled.article`
  background: #212121;
  color: #fff;
  height: calc(100vh - 48px - 48px);
  text-align: center;
  background: ${(props: IWrapperProps) => `url(${props.imageUrl})`};
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
  box-shadow: 0 3px 6px rgba(46, 191, 145, 0.16);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Inner = styled.div`
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  color: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;
  padding: 32px;
  width: 100%;
`;

const Heading = styled.h1`
  font-weight: bold;
  background: var(--brand);
  color: #fff;
  padding: 8px;
  box-shadow: 0 0 6px rgba(0, 143, 254, 0.25);
  border-radius: 2px;
  margin-bottom: 8px;
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

export const CurrentSession = (props: IProps) => (
  <Wrapper imageUrl={props.currentSession.fields.avatar.fields.file.url}>
    <Inner>
      <Heading>現在登壇中</Heading>
      <Title>{props.currentSession.fields.title}</Title>
      <SpeakerName>{props.currentSession.fields.speakerName}</SpeakerName>
      <WithIconTextWrapper>
        <FontAwesomeIcon icon="clock" />
        <SpeakTime>
          {getStartStr(props.currentSession.fields.time)}-
          {getEndStr(
            props.currentSession.fields.time,
            props.currentSession.fields.long
          )}
        </SpeakTime>
      </WithIconTextWrapper>
      <WithIconTextWrapper>
        <FontAwesomeIcon icon="stopwatch" />
        <SpeakTime>
          {props.currentSession.fields.long ? "10min" : "5min"}
        </SpeakTime>
      </WithIconTextWrapper>
    </Inner>
  </Wrapper>
);
