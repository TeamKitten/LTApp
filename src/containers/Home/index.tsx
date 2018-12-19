import { Location } from "history";
import { inject, observer } from "mobx-react";
import * as React from "react";
import { Home } from "../../pages/Home";
import { ICommonStore } from "../../stores/Common";

interface IProps {
  commonStore: ICommonStore;
  location: Location;
}

@inject("commonStore")
@observer
export class HomeContainer extends React.Component<IProps> {
  public componentWillMount() {
    this.props.commonStore.title = "ホーム";
  }

  public render() {
    return <Home commonState={this.props.commonStore} />;
  }
}
