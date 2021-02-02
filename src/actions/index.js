import {
  ADD_DESTINATION,
  REMOVE_DESTINATION,
} from "./types";

export const addDestination = (dispatch, value, firestore, profile, auth) => {
  firestore
    .collection("list")
    .add({
      destination: value,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: auth.uid,
      createdAt: new Date()
    })
    .then((docRef) => {
      docRef.update({
        documentID: docRef.id,
      });
    })
    .then(() => {
      dispatch({ type: ADD_DESTINATION, payload: value });
    })
    .catch((err) => {
      dispatch({ type: "ADD_DESTINATION_ERROR", err });
    });
};
export const removeDestination = (dispatch, firestore, value, id) => {
  firestore
    .collection("list")
    .doc(id)
    .delete()
    .then(function () {
      console.log("Document successfully deleted!");
    })
    .then(() => {
      dispatch({ type: REMOVE_DESTINATION, payload: value });
    })
    .catch(function (error) {
      console.error("Error removing document: ", error);
    });
};
