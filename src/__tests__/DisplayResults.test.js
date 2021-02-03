import React from "react";
import { shallow } from "enzyme";

import DisplayResults from "../components/dashboard/DisplayResults";

describe("DisplayResults", () => {
  const props = {
    index: 1,
    file: {
      destination: "Bolivia",
      documentID: "5a6omg1c36m1GMsSCQEi",
    },
    handleButtonClick: "",
  };
  const getWrapper = shallow(<DisplayResults {...props}/>);
  it("should render without throwing an error", () => {
    const wrapper = getWrapper;
    expect(wrapper).not.toBeNull();
  });
});
