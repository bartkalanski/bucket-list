import React from "react";
import { shallow } from "enzyme";

import Error from "./Error";

describe("Error", () => {
  it("should render without throwing an error", () => {
    const wrapper = shallow (<Error />)
    expect(wrapper).not.toBeNull();
  });
  it("should Error if error is passed down in props", () => {
    const props = {
        err: 'login failed'
    }
    const wrapper = shallow (<Error {...props}/>)
    expect(wrapper.find('.ui.red.message').text()).toBe("login failed");
  });
});
