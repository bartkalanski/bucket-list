import React from "react";
import { shallow } from "enzyme";

import SignedInLinks from "../components/layout/SignedInLinks";

describe("SignedInLinks", () => {
  const wrapper = shallow (<SignedInLinks />)
  it("should render without throwing an error", () => {
    expect(wrapper).not.toBeNull();
  });
});
