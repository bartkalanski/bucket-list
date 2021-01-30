import React, { useState } from "react";
import { useFirebase } from "react-redux-firebase";
import { useSelector, useDispatch } from "react-redux";

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
  const authError = useSelector((state) => state.authReducer.authError);
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
              type="text"
              id="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <button class="ui button" type="submit">
            LOGIN
          </button>
          <div style={{marginTop: "1rem"}}>
            {authError ? (
              <div className="ui red message">{authError}</div>
            ) : null}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
