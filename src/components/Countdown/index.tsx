import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #212121;
  color: #fff;
  height: calc(100vh - 48px - 48px);
  text-align: center;

  background: #8360c3; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #8360c3,
    #2ebf91
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #8360c3,
    #2ebf91
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  box-shadow: 0 3px 6px rgba(46, 191, 145, 0.16);
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
  const diff = props.openDate.getTime() - now.getTime();
  const remaningDays = Math.ceil(diff / 86400000);
  return (
    <div>
      <h1 style={{ marginBottom: "8px" }}>KittenLT1開催まであと</h1>
      <TimerText>{remaningDays}日</TimerText>
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
