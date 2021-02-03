import rootReducer from "../reducers/index";

describe("rootReducer", () => {
  let initState = {
    authReducer: {
      authError: null,
    },
    destinationReducer: {},
    firebase: {
      auth: {
        isEmpty: true,
        isLoaded: false,
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
        isEmpty: true,
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
  it("has a default state", () => {
    expect(rootReducer(undefined, { type: "unexpected" })).toEqual(initState);
  });
  xit("can handle ADD_DESTINATION", () => {
    expect(
      rootReducer({ form: {} }, { type: "ADD_DESTINATION", payload: "Krakow" })
    ).toEqual({
      destinationReducer: {
        destinations: [
          { destination: "Peru" },
          { destination: "Philippines" },
          { destination: "India" },
          { destination: "Krakow" },
        ],
      },
      form: {},
    });
  });
});
