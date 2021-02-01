import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { useFirestore, useFirebase } from "react-redux-firebase";

import { signUp } from '../../actions/index'

const SignUp = () => {
  const [formValues, setFormValues] = useState({});
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.firebase.auth);
  const firestore = useFirestore()
  const firebase = useFirebase()
  const authError = useSelector((state) => state.authReducer.authError)
  //console.log('auth',auth)

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(dispatch, firebase, firestore, formValues)
  };
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
            <div class="field">
              <label htmlFor="firstName">First Name</label>
              <input
                onChange={handleChange}
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
              />
            </div>
            <div class="field">
              <label>Last Name</label>
              <input
                onChange={handleChange}
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
              />
            </div>
            <button class="ui button" type="submit">
              Submit
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

export default SignUp;
