import { ADD_DESTINATION, REMOVE_DESTINATION, LOGIN_SUCCESS, LOGIN_ERROR, SIGNOUT_SUCCESS } from "./types";

export const addDestination = (dispatch, value, firestore) => {
  firestore
    .collection("list")
    .add({
      destination: value,
    }) 
    .then((docRef) => {
      docRef.update({
        destinationID: docRef.id,
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
export const signIn = (dispatch, firebase, email,password) => {
  firebase.auth().signInWithEmailAndPassword(
    email,
    password
  ).then(() => {
    dispatch({ type: LOGIN_SUCCESS})
  }).catch((err)=>{
    dispatch({ type: LOGIN_ERROR, err})
  })
}
export const signOut = (dispatch, firebase) => {
  firebase.auth().signOut().then(()=>{
    dispatch({ type: SIGNOUT_SUCCESS})
  })
}
