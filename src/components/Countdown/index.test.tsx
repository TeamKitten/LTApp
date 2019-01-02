// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faClock, faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { mount } from "enzyme";
import * as React from "react";
import { CountDown } from ".";

describe("CountDown Component", () => {
  it("開場してない状態であと〜日が表示される", () => {
    const constantDate = new Date("2019/1/1 00:00");
    Date.now = jest.fn(() => constantDate.getTime());

    const date = new Date("2019/2/2 13:30");
    const wrapper = mount(<CountDown openDate={date} closeDate={date} />);
    expect(wrapper.find("#remaning").text()).toBe("KittenLT1開催まであと33日");
  });

  it("閉場したら正しいメッセージを表示する", () => {
    const constantDate = new Date("2019/2/2 13:35");
    Date.now = jest.fn(() => constantDate.getTime());

    const date = new Date("2019/2/2 13:30");
    const wrapper = mount(<CountDown openDate={date} closeDate={date} />);
    expect(wrapper.find("#tada").length).toBe(3);
  });
});
