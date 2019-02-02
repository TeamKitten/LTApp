// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faClock, faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { mount } from "enzyme";
import * as React from "react";
import { CountDown } from ".";

describe("CountDown Component", () => {
  it("開場してない状態であと〜日が表示される", () => {
    const constantDate = new Date("2019/1/1 00:00");
    Date.now = jest.fn(() => constantDate.getTime());

    const openDate = new Date("2019/2/2 13:30");
    const closeDate = new Date("2019/2/2 16:30");
    const wrapper = mount(
      <CountDown openDate={openDate} closeDate={closeDate} />
    );
    expect(wrapper.find("#remaning").text()).toBe("KittenLT1開催まであと32日");
  });

  it("閉場したら正しいメッセージを表示する", () => {
    const constantDate = new Date("2019/2/2 16:35");
    Date.now = jest.fn(() => constantDate.getTime());

    const openDate = new Date("2019/2/2 13:30");
    const closeDate = new Date("2019/2/2 16:30");
    const wrapper = mount(
      <CountDown openDate={openDate} closeDate={closeDate} />
    );
    expect(wrapper.find("#tada").length).toBe(3);
  });
});
