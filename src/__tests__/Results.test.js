import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";

import Results from "../components/dashboard/Results";
import rootReducer from "../reducers/index";
import { removeDestination } from "../actions/index";

describe("Results - no results", () => {
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
  it("should not render a header", () => {
    const wrapper = getWrapper(mockStore);
    expect(wrapper.find(".ui.header")).toHaveLength(0);
  });
});
describe("Results - results", () => {
  const state = {
    firestore: {
      data: { list: { "4DlItkwmmjxaDLiDRmUF": { destination: "Bolivia" } } },
    },
  };
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
  it("should render a header", () => {
    const wrapper = getWrapper(mockStore);
    expect(wrapper.find(".ui.header")).toHaveLength(1);
  });
  xit("should dispatch the correct action on button click", () => {
    mockStore.dispatch = jest.fn();
    const wrapper = getWrapper(mockStore);
    wrapper.find(".ui.red.button").simulate("click", {
      preventDefault: () => {},
    });
    expect(wrapper.find(".ui.header")).toHaveLength(0);
  });
});
