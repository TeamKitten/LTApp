import * as React from "react";
import * as ReactSwipe from "react-swipe";
import styled from "styled-components";
import { PaginationDot, PaginationDots } from "../../components/Pagination";
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

interface IState {
  page: number;
}

const participant = (participants: IParticipant[], id: string) =>
  participants.filter(p => p.fields.participantId === id)[0].fields;

export class Speakers extends React.Component<IProps, IState> {
  private swipeEl: ReactSwipe | null = null;

  constructor(props: IProps) {
    super(props);
    this.state = {
      page: 0
    };
    this.onPageChange = this.onPageChange.bind(this);
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
    return (
      <Wrapper>
        <ReactSwipe
          key={this.props.sessions.length}
          swipeOptions={{
            continuous: false,
            callback: this.onPageChange
          }}
          ref={el => (this.swipeEl = el)}
        >
          {this.props.sessions.map(item => (
            <SpeakerCardItem className="session" key={item.sys.id}>
              <SpeakerCard
                participant={participant(
                  this.props.participants,
                  item.fields.participantId
                )}
                session={item.fields}
              />
            </SpeakerCardItem>
          ))}
        </ReactSwipe>
        <PaginationDots>
          {this.props.sessions.map((item, i) => (
            <PaginationDot
              key={i}
              onClick={() => this.onPaginationDotClick(i)}
              active={i === this.state.page}
            />
          ))}
        </PaginationDots>
      </Wrapper>
    );
  }
}
