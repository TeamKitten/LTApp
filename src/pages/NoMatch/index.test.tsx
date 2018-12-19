import * as React from "react";
import * as ReactDOM from "react-dom";
import { NoMatch } from ".";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<NoMatch />, div);
  ReactDOM.unmountComponentAtNode(div);
});
