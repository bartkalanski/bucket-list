import { ADD_DESTINATION, REMOVE_DESTINATION } from "./types";

export const addDestination = (dispatch, value) => {
  dispatch({ type: ADD_DESTINATION, payload: value });
};
export const removeDestination = (dispatch, value) => {
  dispatch({ type: REMOVE_DESTINATION, payload: value });
};
