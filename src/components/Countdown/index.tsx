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

const TimerText = styled.span`
  display: block;
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 8px;
`;

const Timer = (props: IProps) => {
  const now = Date.now();
  const diff = Math.ceil((props.openDate.getTime() - now) / 86400000);
  return (
    <div>
      <h1 id="remaning">
        KittenLT1開催まであと
        <TimerText>{diff}日</TimerText>
      </h1>
    </div>
  );
};

interface IProps {
  openDate: Date;
  closeDate: Date;
}

export const CountDown = (props: IProps) => (
  <Wrapper>
    {props.closeDate.getTime() < Date.now() ? (
      <h1 id="greeting" style={{ fontWeight: "bold" }}>
        ご来場ありがとうございました！
      </h1>
    ) : (
      <Timer {...props} />
    )}
  </Wrapper>
);
