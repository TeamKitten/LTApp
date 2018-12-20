import { inject, observer } from "mobx-react";
import * as React from "react";
import { Speakers } from "../../pages/Speakers";
import { ICommonStore } from "../../stores/Common";
import { IContentfulStore } from "../../stores/Contentful";

interface IProps {
  commonStore: ICommonStore;
  contentfulStore: IContentfulStore;
}

@inject("commonStore")
@inject("contentfulStore")
@observer
export class SpeakersContainer extends React.Component<IProps> {
  public componentWillMount() {
    this.props.commonStore.title = "登壇者";
    this.props.contentfulStore.fetch();
  }

  public render() {
    if (
      !this.props.contentfulStore.sessions.length ||
      !this.props.contentfulStore.participants.length
    ) {
      return null;
    }
    return (
      <Speakers
        participants={this.props.contentfulStore.participants}
        sessions={this.props.contentfulStore.sessions}
      />
    );
  }
}
