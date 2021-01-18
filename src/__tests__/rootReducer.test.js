import rootReducer from "../reducers/index";

describe("rootReducer", () => {
  let initState = {
    destinationReducer: {
      destinations: [
        { destination: "Peru" },
        { destination: "Philippines" },
        { destination: "India" },
      ],
    },
    form: {},
  };
  it("has a default state", () => {
    expect(rootReducer(undefined, { type: "unexpected" })).toEqual(initState);
  });
  it("can handle ADD_DESTINATION", () => {
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
