import React from "react";
import { shallow } from "enzyme";

import Button from "./Button";

describe("Loader", () => {
  const wrapper = shallow (<Button />)
  it("should render without throwing an error", () => {
    expect(wrapper).not.toBeNull();
  });
});
