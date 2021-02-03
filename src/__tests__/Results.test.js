import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";

import Results from "../components/dashboard/Results";
import rootReducer from "../reducers/index";

describe("List", () => {
  const state = {};
  const mockStore = createStore(rootReducer, state);
  const getWrapper = () =>
    mount(
      <Provider store={mockStore}>
        <Results />
      </Provider>
    );
  it("should render without throwing an error", () => {
    const wrapper = getWrapper(mockStore);
    expect(wrapper).not.toBeNull();
  });
  xit("should render a header", () => {
    const wrapper = getWrapper(mockStore);
    expect(wrapper.find(".ui.header")).toHaveLength(1);
  });
  xit("should dispatch the correct action on button click", () => {
    mockStore.dispatch = jest.fn();
    const wrapper = getWrapper(mockStore);
    wrapper.find(".ui.red.button").simulate("click");
    expect(mockStore.dispatch).toHaveBeenCalled();
  });
});
