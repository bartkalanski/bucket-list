import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import authReducer from './authReducer'
import destinationReducer from "./destinationReducer";
import { ADD_DESTINATION } from "../actions/types";

const rootReducer = combineReducers({
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
