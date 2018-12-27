import { Location } from "history";
import * as Cookies from "js-cookie";
import { inject, observer } from "mobx-react";
import * as React from "react";
import { QRPage } from "../..//pages/QR";
import { ICommonStore } from "../../stores/Common";
import { IContentfulStore } from "../../stores/Contentful";

const COOKIE_NAME = "receptionNumber";

interface IProps {
  commonStore: ICommonStore;
  contentfulStore: IContentfulStore;
  location: Location;
}

interface IState {
  num: number;
  error: Error | null;
  token: string | null;
}

@inject("commonStore")
@inject("contentfulStore")
@observer
export class QRContainer extends React.Component<IProps, IState> {
  private originalIsMounted = false;

  get isMounted() {
    return this.originalIsMounted;
  }
  set isMounted(flag) {
    this.originalIsMounted = flag;
  }

  public constructor(props: IProps) {
    super(props);
    this.state = {
      num: 0,
      error: null,
      token: null
    };
    this.onNumberChange = this.onNumberChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.getParticipant = this.getParticipant.bind(this);
    this.onResetClick = this.onResetClick.bind(this);
  }

  public componentWillMount() {
    this.props.commonStore.title = "参加証";
  }

  public async componentDidMount() {
    this.isMounted = true;
    await this.props.contentfulStore.fetch();
    const receptionNumber = Cookies.get(COOKIE_NAME);
    if (!this.isMounted) {
      return;
    }
    if (receptionNumber) {
      const num = parseInt(receptionNumber, 10);
      if (isNaN(num)) {
        this.setState({
          error: new Error("クッキーが不正です")
        });
      }
      this.setState({
        num
      });
      const participant = this.getParticipant(num);
      this.setState({
        token: JSON.stringify(participant)
      });
    }
  }

  public componentWillUnmount() {
    this.isMounted = false;
  }

  public onNumberChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      num: parseInt(event.target.value, 10)
    });
  }

  public onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.setState({
      error: null
    });
    Cookies.set(COOKIE_NAME, this.state.num.toString());
    const participant = this.getParticipant(this.state.num);
    this.setState({
      token: JSON.stringify(participant)
    });
  }

  public onResetClick(event: React.MouseEvent<HTMLButtonElement>) {
    Cookies.remove("receptionNumber");
    this.setState({
      token: null,
      error: null,
      num: 0
    });
  }

  public getParticipant(num: number) {
    const foundParticipants = this.props.contentfulStore.participants.filter(
      p => p.fields.participantId === num.toString()
    );
    if (!foundParticipants.length) {
      this.setState({
        error: new Error("参加者が見つかりませんでした")
      });
      return;
    }
    const foundSessions = this.props.contentfulStore.sessions.filter(
      s => s.fields.participantId === num.toString()
    );
    return !foundSessions.length
      ? {
          avatarUrl: foundParticipants[0].fields.avatar.fields.file.url,
          id: foundParticipants[0].fields.participantId,
          name: foundParticipants[0].fields.name,
          afterParty: foundParticipants[0].fields.afterParty,
          paid: foundParticipants[0].fields.paid
        }
      : {
          avatarUrl: foundParticipants[0].fields.avatar.fields.file.url,
          id: foundParticipants[0].fields.participantId,
          name: foundParticipants[0].fields.name,
          afterParty: foundParticipants[0].fields.afterParty,
          paid: foundParticipants[0].fields.paid,
          session: {
            title: foundSessions[0].fields.title,
            long: foundSessions[0].fields.long,
            startAt: foundSessions[0].fields.startAt
          }
        };
  }

  public render() {
    if (
      !this.props.contentfulStore.sessions.length ||
      !this.props.contentfulStore.participants.length
    ) {
      return null;
    }
    return (
      <QRPage
        error={this.state.error}
        onNumberChange={this.onNumberChange}
        onResetClick={this.onResetClick}
        onSubmit={this.onSubmit}
        token={this.state.token}
      />
    );
  }
}
