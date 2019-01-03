import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { shallow } from "enzyme";
import * as React from "react";
import { NavBarIcon } from ".";

describe("NavBar Component", () => {
  it("正しくタイトルが表示される", () => {
    library.add(faHome);
    const wrapper = shallow(
      <NavBarIcon
        icon={faHome}
        title="Home"
        active={true}
        onClick={jest.fn()}
      />
    );
    expect(wrapper.find(".navTitle").text()).toBe("Home");
  });
  it("クリックできる", () => {
    library.add(faHome);
    const onClick = jest.fn();
    const wrapper = shallow(
      <NavBarIcon icon={faHome} title="Home" active={true} onClick={onClick} />
    );
    wrapper.simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
});
