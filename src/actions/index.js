import {
  ADD_DESTINATION,
  REMOVE_DESTINATION,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNOUT_SUCCESS,
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
export const signIn = (dispatch, firebase, email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      dispatch({ type: LOGIN_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: LOGIN_ERROR, err });
    });
};
export const signOut = (dispatch, firebase) => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      dispatch({ type: SIGNOUT_SUCCESS });
    });
};
export const signUp = (dispatch, firebase, firestore, newUser) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(newUser.email, newUser.password)
    .then((response) => {
      // Use id assigned to the user by firebase
      return firestore
        .collection("users")
        .doc(response.user.uid)
        .set({
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          initials: newUser.firstName[0] + newUser.lastName[0],
        });
    })
    .then(() => {
      dispatch({ type: "SIGNUP_SUCCESS" });
    })
    .catch((err) => {
      dispatch({ type: "SIGNUP_ERROR", err });
    });
};
