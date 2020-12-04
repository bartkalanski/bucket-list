const initState = {
  destinations: [
    { destination: "Bali" },
    { destination: "Amazon" },
    { destination: "Berghain" },
  ],
};

const rootReducer = (state = initState, { type, payload }) => {
  if (type === "ADD_DESTINATION") {
    return {
      destinations: [...state.destinations, { destination: payload }],
    };
  }
  if (type === "REMOVE_DESTINATION") {
    console.log(state.destinations);
    console.log(payload);

    return state.destinations.filter(
      (item) => state.destinations.indexOf(item) === payload
    );
  }

  return state;
};

export default rootReducer;
