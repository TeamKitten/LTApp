import { Location } from "history";
import { inject, observer } from "mobx-react";
import * as React from "react";
import { QRPage } from "../..//pages/QR";
import { ICommonStore } from "../../stores/Common";
import { IContentfulStore } from "../../stores/Contentful";

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
  public constructor(props: IProps) {
    super(props);
    this.state = {
      num: 0,
      error: null,
      token: null
    };
    this.onNumberChange = this.onNumberChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  public componentWillMount() {
    this.props.commonStore.title = "参加証";
    this.props.contentfulStore.fetch();
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
    const foundParticipants = this.props.contentfulStore.participants.filter(
      p => p.fields.participantId === this.state.num.toString()
    );
    if (!foundParticipants.length) {
      this.setState({
        error: new Error("参加者が見つかりませんでした")
      });
      return;
    }
    const foundSessions = this.props.contentfulStore.sessions.filter(
      s => s.fields.participantId === this.state.num.toString()
    );
    const participant = !foundSessions.length
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
    this.setState({
      token: JSON.stringify(participant)
    });
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
        onSubmit={this.onSubmit}
        token={this.state.token}
      />
    );
  }
}
