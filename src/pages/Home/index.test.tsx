// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faClock, faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { mount } from "enzyme";
import * as React from "react";
import { Home } from ".";
import { CommonStore } from "../../stores/Common";
import { ContentfulStore } from "../../stores/Contentful";

describe("Home Page", () => {
  it("開場している状態であと〜日が表示されない", () => {
    const constantDate = new Date("2019/2/2 13:35");
    Date.now = jest.fn(() => constantDate.getTime());

    const commonStore = new CommonStore();
    commonStore.openDate = new Date("2019/2/2 13:30");
    const contentfulStore = new ContentfulStore();
    const wrapper = mount(
      <Home commonStore={commonStore} contentfulStore={contentfulStore} />
    );
    expect(wrapper.find("#noSessions").length).toBe(1);
  });
});
