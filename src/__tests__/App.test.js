import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";

import rootReducer from "../reducers/index";
import App from "../components/App";

describe("App", () => {
  const state = {
    destinationReducer: {
      destination: "Krakow",
    },
    form: "Krakow",
  };
  const mockStore = createStore(rootReducer, state);
  const getWrapper = () =>
    mount(
      <Provider store={mockStore}>
        <App />
      </Provider>
    );
  it("should render without throwing an error", () => {
    const wrapper = getWrapper(mockStore);
    expect(wrapper).not.toBeNull();
  });
  it("should dispatch on form submit", () => {
    mockStore.dispatch = jest.fn();

    const wrapper = getWrapper(mockStore);
    wrapper.find("Form").simulate("submit");
    expect(mockStore.dispatch).toHaveBeenCalled();
  });
});
