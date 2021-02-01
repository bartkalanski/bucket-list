import React from "react";
import ReactDOM from "react-dom";
import { Provider, useSelector } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { ReactReduxFirebaseProvider, isLoaded } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";

import App from "./components/App";
import reducers from "./reducers/index";
import fbConfig from "./config/fbConfig";

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

// Initialize firebase instance
firebase.initializeApp(fbConfig);
firebase.firestore();

const store = createStore(reducers, composeWithDevTools());

const rrfProps = {
  firebase,
  config: rrfConfig, fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth)) return <div>Loading...</div>;
  return children;
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.querySelector("#root")
);
