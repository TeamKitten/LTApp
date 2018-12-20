import { Location } from "history";
import { inject, observer } from "mobx-react";
import * as React from "react";
import { Home } from "../../pages/Home";
import { ICommonStore } from "../../stores/Common";
import { IContentfulStore } from "../../stores/Contentful";

interface IProps {
  commonStore: ICommonStore;
  contentfulStore: IContentfulStore;
  location: Location;
}

@inject("commonStore")
@inject("contentfulStore")
@observer
export class HomeContainer extends React.Component<IProps> {
  public componentWillMount() {
    this.props.commonStore.title = "ホーム";
    this.props.contentfulStore.fetchSpeakers();
  }

  public render() {
    if (
      !this.props.contentfulStore.sessions.length ||
      !this.props.contentfulStore.participants.length
    ) {
      return null;
    }
    return (
      <Home
        commonStore={this.props.commonStore}
        contentfulStore={this.props.contentfulStore}
      />
    );
  }
}
