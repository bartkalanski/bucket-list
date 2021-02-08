import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter } from "react-router-dom";

import rootReducer from "../reducers/index";
import SignUp from "../components/auth/SignUp";

describe("SignUp - logged out", () => {
  const state = {};
  const mockStore = createStore(rootReducer, state);
  const getWrapper = () =>
    mount(
      <Provider store={mockStore}>
        <SignUp />
      </Provider>
    );

  it("should render without throwing an error", () => {
    const wrapper = getWrapper(mockStore);
    expect(wrapper).not.toBeNull();
  });
  it("should render a button", () => {
    const wrapper = getWrapper(mockStore);
    expect(wrapper.find(".ui.button")).not.toBeNull();
  });
  xit("should dispatch on form submit", () => {
    mockStore.dispatch = jest.fn();
    const wrapper = getWrapper(mockStore);
    wrapper.find("form").simulate("submit", {
        preventDefault: () => {},
      });
    expect(mockStore.dispatch).toHaveBeenCalledTimes(1);
  });
});
describe("SignUp - logged in", () => {
  const state = {
    firebase: {
      auth: {
        uid: "bk123",
      },
    },
  };
  const mockStore = createStore(rootReducer, state);
  const getWrapper = () =>
    mount(
      <Provider store={mockStore}>
        <BrowserRouter>
          <SignUp />
        </BrowserRouter>
      </Provider>
    );
  it("should render empty object if user is logged in", () => {
    const wrapper = getWrapper(mockStore);
    expect(wrapper).toEqual({});
  });
});
