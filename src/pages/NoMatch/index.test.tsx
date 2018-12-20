import { shallow } from "enzyme";
import * as React from "react";
import { NoMatch } from ".";

describe("NoMatch Page", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<NoMatch />);
    expect(wrapper.find("h1").text()).toBeDefined();
  });
});
