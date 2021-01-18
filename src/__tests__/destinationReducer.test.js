import destinationReducer from "../reducers/destinationReducer";

describe("basketReducer", () => {
  let initState = {
    destinations: [
      { destination: "Peru" },
      { destination: "Philippines" },
      { destination: "India" },
    ],
  };
  it("has a default state", () => {
    expect(destinationReducer(undefined, { type: "unexpected" })).toEqual(
      initState
    );
  });
  it("can handle ADD_DESTINATION", () => {
    expect(
      destinationReducer(initState, {
        type: "ADD_DESTINATION",
        payload: "Krakow",
      })
    ).toEqual({
      destinations: [
        { destination: "Peru" },
        { destination: "Philippines" },
        { destination: "India" },
        { destination: "Krakow" },
      ],
    });
  });
  it("can handle REMOVE_DESTINATION", () => {
    expect(
      destinationReducer(initState, { type: "REMOVE_DESTINATION", payload: 2 })
    ).toEqual({
      destinations: [{ destination: "Peru" }, { destination: "Philippines" }],
    });
  });
});
