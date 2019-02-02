import * as React from "react";
import * as ReactSwipe from "react-swipe";
import styled from "styled-components";
import ThankYouBG from "../../assets/thankyou.jpg";
import { PaginationDot, PaginationDots } from "../Pagination";

const Wrapper = styled.div`
  height: calc(100vh - 48px - 48px);
  text-align: center;
  overflow: hidden;
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

interface ISliderState {
  page: number;
}

export class Slider extends React.Component<IProps, ISliderState> {
  private swipeEl: ReactSwipe | null = null;

  constructor(props: IProps) {
    super(props);
    this.state = {
      page: 0
    };
    this.onPageChange = this.onPageChange.bind(this);
    this.onPaginationDotClick = this.onPaginationDotClick.bind(this);
  }

  public onPageChange(page: number) {
    this.setState({
      page
    });
  }

  public onPaginationDotClick(page: number) {
    if (this.swipeEl) {
      this.swipeEl.slide(page, 500);
      this.setState({
        page
      });
    }
  }

  public render() {
    const now = Date.now();
    const startDate = new Date(this.props.openDate);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
    startDate.setMilliseconds(0);
    const diff = Math.ceil((startDate.getTime() - now) / 86400000);
    return (
      <SliderWrapper>
        <ReactSwipe
          swipeOptions={{
            continuous: false,
            callback: this.onPageChange
          }}
          ref={el => (this.swipeEl = el)}
        >
          <SwipeItem>
            <Card imageUrl={require("../../assets/clock.jpg")}>
              <CardInner>
                <h1 id="remaning">
                  KittenLT1開催まであと
                  {this.props.openDate.getDate() ===
                  new Date(Date.now()).getTime() ? (
                    <TimerText>本日開催！</TimerText>
                  ) : (
                    <TimerText>{diff}日</TimerText>
                  )}
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
                  connpassに登録
                </CardLink>
              </CardInner>
            </Card>
          </SwipeItem>
        </ReactSwipe>
        <PaginationDots>
          <PaginationDot
            onClick={() => this.onPaginationDotClick(0)}
            active={this.state.page === 0}
          />
          <PaginationDot
            onClick={() => this.onPaginationDotClick(1)}
            active={this.state.page === 1}
          />
        </PaginationDots>
      </SliderWrapper>
    );
  }
}

interface IProps {
  openDate: Date;
  closeDate: Date;
}

const TadaWrapper = styled.div`
  height: calc(100vh - 48px - 48px);
  background: url(${ThankYouBG});
  background-size: cover;
  background-attachment: fixed;
  background-position: center right;
  background-repeat: no-repeat;
`;

const TadaInner = styled.div`
  background: rgba(0, 0, 0, 0.25);
  border-radius: 32px;
  height: 100%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 32px;
  font-size: 1.5rem;
  line-height: 1.25;
  font-weight: bold;
`;

export const CountDown = (props: IProps) => (
  <Wrapper>
    {props.closeDate.getTime() < new Date(Date.now()).getTime() ? (
      <TadaWrapper id="tada">
        <TadaInner>
          <h1 style={{ fontSize: "3rem" }}>ご来場</h1>
          <h2>ありがとうございました！</h2>
        </TadaInner>
      </TadaWrapper>
    ) : (
      <Slider {...props} />
    )}
  </Wrapper>
);
