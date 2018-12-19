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
    this.props.contentfulStore.fetchSpeakers();
  }

  public render() {
    return <Speakers speakers={this.props.contentfulStore.speakers} />;
  }
}
