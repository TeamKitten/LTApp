import { inject, observer } from "mobx-react";
import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
import { HomeContainer } from "./containers/Home";
import { QRContainer } from "./containers/QR";
import { SpeakersContainer } from "./containers/Speakers";
import { NoMatch } from "./pages/NoMatch";
import { ICommonStore } from "./stores/Common";

interface IProps {
  commonStore: ICommonStore;
}

@inject("commonStore")
@observer
export class Routes extends React.Component<IProps> {
  public render() {
    const SwitchWrapper = styled.div`
      margin-top: 48px;
    `;
    return (
      <Router>
        <div>
          <Header title={this.props.commonStore.title} />
          <SwitchWrapper>
            <Switch>
              <Route exact={true} path="/" component={HomeContainer} />
              <Route
                exact={true}
                path="/speakers"
                component={SpeakersContainer}
              />
              <Route exact={true} path="/qr" component={QRContainer} />
              <Route component={NoMatch} />
            </Switch>
          </SwitchWrapper>
          <NavBar />
        </div>
      </Router>
    );
  }
}
