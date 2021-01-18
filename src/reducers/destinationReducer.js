import { ADD_DESTINATION, REMOVE_DESTINATION } from "../actions/types";

const initState = {
  destinations: [
    { destination: "Peru" },
    { destination: "Philippines" },
    { destination: "India" },
  ],
};

const destinationReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_DESTINATION:
      return {
        destinations: [...state.destinations, { destination: payload }],
      };
    case REMOVE_DESTINATION:
      return {
        destinations: state.destinations.filter(
          (item) => state.destinations.indexOf(item) != payload
        ),
      };
    default:
      return state;
  }
};

export default destinationReducer;
