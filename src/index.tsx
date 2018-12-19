import { Provider } from "mobx-react";
import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import { register as registerServiceWorker } from "./registerServiceWorker";
import { Routes } from "./Routes";
import { CommonStore } from "./stores/Common";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faClock,
  faHome,
  faStopwatch,
  faUsers
} from "@fortawesome/free-solid-svg-icons";
import { ContentfulStore } from "./stores/Contentful";

library.add(faHome);
library.add(faUsers);
library.add(faClock);
library.add(faStopwatch);

const stores = {
  commonStore: new CommonStore(),
  contentfulStore: new ContentfulStore()
};

ReactDOM.render(
  <Provider {...stores}>
    <Routes commonStore={stores.commonStore} />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
