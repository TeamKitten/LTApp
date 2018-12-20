import * as React from "react";
import * as ReactSwipe from "react-swipe";
import styled from "styled-components";

const Wrapper = styled.div`
  height: calc(100vh - 48px - 48px);
  text-align: center;
  overflow: hidden;

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
`;

const TimerText = styled.span`
  display: block;
  font-size: 3rem;
  font-weight: bold;
  margin-top: 8px;
`;

interface IStyledCardProps {
  imageUrl: string;
}

const SwipeItem = styled.div`
  min-width: 100vw;
  height: calc(100vh - 48px - 48px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Card = styled.div`
  background: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  width: 75vw;
  height: 70vh;
  border-radius: 32px;
  background: ${(props: IStyledCardProps) => `url(${props.imageUrl})`};
  background-size: cover;
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 32px;
`;

const SliderWrapper = styled.section`
  overflow: hidden;
`;

const CardLink = styled.a`
  color: #fff;
  font-weight: bold;
  margin: 12px 0;
  font-size: 1.25rem;
`;

const Slider = (props: IProps) => {
  const now = Date.now();
  const diff = Math.ceil((props.openDate.getTime() - now) / 86400000);
  return (
    <SliderWrapper>
      <ReactSwipe swipeOptions={{ continuous: false }}>
        <SwipeItem>
          <Card imageUrl={require("../../assets/clock.jpg")}>
            <CardInner>
              <h1 id="remaning">
                KittenLT1開催まであと
                <TimerText>{diff}日</TimerText>
              </h1>
            </CardInner>
          </Card>
        </SwipeItem>
        <SwipeItem>
          <Card imageUrl={require("../../assets/mic.jpg")}>
            <CardInner>
              <h1 style={{ fontWeight: "bold", fontSize: "2rem" }}>
                登壇者募集中
              </h1>
              <CardLink
                href="https://team-kitten.connpass.com/event/113249/"
                rel="noreferrer noopener"
              >
                Connpassに登録
              </CardLink>
            </CardInner>
          </Card>
        </SwipeItem>
      </ReactSwipe>
    </SliderWrapper>
  );
};

interface IProps {
  openDate: Date;
  closeDate: Date;
}

const GreetingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CountDown = (props: IProps) => (
  <Wrapper>
    {props.closeDate.getTime() < Date.now() ? (
      <GreetingWrapper>
        <h1 id="greeting" style={{ fontWeight: "bold" }}>
          ご来場ありがとうございました！
        </h1>
      </GreetingWrapper>
    ) : (
      <Slider {...props} />
    )}
  </Wrapper>
);
