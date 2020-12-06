const initState = {
  destinations: [
    { destination: "Peru" },
    { destination: "Philippines" },
    { destination: "India" },
  ],
};

const rootReducer = (state = initState, { type, payload }) => {
  if (type === "ADD_DESTINATION") {
    return {
      destinations: [...state.destinations, { destination: payload }],
    };
  }
  if (type === "REMOVE_DESTINATION") {
    return {
      destinations: state.destinations.filter(
        (item) => state.destinations.indexOf(item) != payload
      ),
    };
  }

  return state;
};

export default rootReducer;
