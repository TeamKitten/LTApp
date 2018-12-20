import { shallow } from "enzyme";
import * as React from "react";
import { Header } from ".";

describe("Header Component", () => {
  it("正しくタイトルが表示される", () => {
    const wrapper = shallow(<Header title="hoge" />);
    expect(wrapper.find("#title").text()).toBe("hoge");
  });
});
