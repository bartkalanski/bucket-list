import React, { useState } from "react";
import { useFirebase } from "react-redux-firebase";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

import { signIn } from "../../actions/index";

const SignIn = () => {
  const [email, setEmail] = useState({ email: "" });
  const [password, setPassword] = useState({ password: "" });
  const dispatch = useDispatch();
  const firebase = useFirebase();
  const handleChange = (e) => {
    return e.target.id === "email"
      ? setEmail({ email: e.target.value })
      : setPassword({ password: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(dispatch, firebase, email.email, password.password);
  };
  const auth = useSelector((state) => state.firebase.auth);
  const authError = useSelector((state) => state.authReducer.authError);
  if (!auth.uid)
    return (
      <div className="ui container" style={{ marginTop: "10vh" }}>
        <div className="ui segment">
          <form onSubmit={handleSubmit} class="ui form">
            <div class="field">
              <label htmlFor="email">E-mail</label>
              <input
                onChange={handleChange}
                type="email"
                id="email"
                name="email"
                placeholder="E-mail"
              />
            </div>
            <div class="field">
              <label>Password</label>
              <input
                onChange={handleChange}
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <button class="ui button" type="submit">
              LOGIN
            </button>
            <div style={{ marginTop: "1rem" }}>
              {authError ? (
                <div className="ui red message">{authError}</div>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    );
  return <Redirect to="/home" />;
};

export default SignIn;
