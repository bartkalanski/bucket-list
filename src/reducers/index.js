import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

import authReducer from "./authReducer";
import { ADD_DESTINATION } from "../actions/types";

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  authReducer: authReducer,
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
