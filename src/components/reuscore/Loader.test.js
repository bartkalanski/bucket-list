import React from "react";
import { shallow } from "enzyme";

import Loader from "./Loader";

describe("Loader", () => {
  const wrapper = shallow (<Loader/>)
  it("should render without throwing an error", () => {
    expect(wrapper).not.toBeNull();
  });
});
