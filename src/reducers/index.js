import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

//import firebase from 'firebase/app'
//import 'firebase/firestore'
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

import authReducer from "./authReducer";
import destinationReducer from "./destinationReducer";
import { ADD_DESTINATION } from "../actions/types";

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  authReducer: authReducer,
  destinationReducer: destinationReducer,
  form: formReducer.plugin({
    destinationForm: (state, action) => {
      // <------ 'destinationForm' is name of form given to reduxForm()
      switch (action.type) {
        case ADD_DESTINATION:
          return undefined; // <--- blow away form data
        default:
          return state;
      }
    },
  }),
});

export default rootReducer;
