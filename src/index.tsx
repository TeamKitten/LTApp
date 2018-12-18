import { Provider } from "mobx-react";
import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import { register as registerServiceWorker } from "./registerServiceWorker";
import { Routes } from "./Routes";
import { CommonStore } from "./stores/Common";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome } from "@fortawesome/free-solid-svg-icons";

library.add(faHome);

const stores = {
  commonStore: new CommonStore()
};

ReactDOM.render(
  <Provider {...stores}>
    <Routes commonStore={stores.commonStore} />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
