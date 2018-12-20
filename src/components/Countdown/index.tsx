import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: calc(100vh - 48px - 48px);
  text-align: center;

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TimerText = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
`;

const Timer = (props: IProps) => {
  const now = new Date();
  const diff = Math.ceil((props.openDate.getTime() - now.getTime()) / 86400000);
  return (
    <div>
      <h1 style={{ marginBottom: "8px" }}>KittenLT1開催まであと</h1>
      <TimerText>{diff}日</TimerText>
    </div>
  );
};

interface IProps {
  openDate: Date;
  closeDate: Date;
}

export const CountDown = (props: IProps) => (
  <Wrapper>
    {props.closeDate.getTime() < new Date().getTime() ? (
      <h1 style={{ fontWeight: "bold" }}>ご来場ありがとうございました！</h1>
    ) : (
      <Timer {...props} />
    )}
  </Wrapper>
);
