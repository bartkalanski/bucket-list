import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter } from "react-router-dom";

import Dashboard from "../components/dashboard/Dashboard";
import rootReducer from "../reducers/index";

describe("Dashboard", () => {
    let state = {
        authReducer: {
          authError: null,
        },
        destinationReducer: {},
        firebase: {
          auth: {
            isEmpty: true,
            isLoaded: false,
            uid: "EYRlZqVaDMWt9t7iacAuM4ellzp1",
          },
          authError: null,
          data: {},
          errors: [],
          isInitializing: false,
          listeners: {
            allIds: [],
            byId: {},
          },
          ordered: {},
          profile: {
            firstName: "test",
            isLoaded: false,
          },
          requested: {},
          requesting: {},
          timestamps: {},
        },
        firestore: {
          composite: undefined,
          data: {},
          errors: {
            allIds: [],
            byQuery: {},
          },
          listeners: {
            allIds: [],
            byId: {},
          },
          ordered: {},
          queries: {},
          status: {
            requested: {},
            requesting: {},
            timestamps: {},
          },
        },
        form: {},
      };
  const mockStore = createStore(rootReducer, state);
  const getWrapper = () =>
    mount(
      <Provider store={mockStore}>
        <BrowserRouter>
          <Dashboard />
        </BrowserRouter>
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
