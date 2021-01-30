import { ADD_DESTINATION, REMOVE_DESTINATION } from "./types";

export const addDestination = (dispatch, value, firestore) => {
  // make async call to database
  firestore
    .collection("list")
    .add({
      destination: value,
    })
    .then((docRef) => {
      docRef.update({
        destinationID: docRef.id,
      });
    }).then(()=>{
      dispatch({ type: ADD_DESTINATION, payload: value })
    }).catch((err) => {
      dispatch({ type: 'ADD_DESTINATION_ERROR', err})
    })
  ;
};
export const removeDestination = (dispatch, value) => {
  dispatch({ type: REMOVE_DESTINATION, payload: value });
};
