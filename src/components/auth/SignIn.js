import React, { useState } from "react";
import { useFirebase } from "react-redux-firebase";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

import { signIn } from "../../actions/authActions";
import Input from "../reuscore/Input";
import Button from "../reuscore/Button";

const SignIn = () => {
  const [formValues, setFormValues] = useState({});
  const dispatch = useDispatch();
  const firebase = useFirebase();
  const auth = useSelector((state) => state.firebase.auth);
  const authError = useSelector((state) => state.authReducer.authError);

  const handleFormValuesChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    signIn(dispatch, firebase, formValues.email, formValues.password);
  };

  if (!auth.uid)
    return (
      <div className="ui container" style={{ marginTop: "10vh" }}>
        <div className="ui segment">
          <form onSubmit={handleSubmit} class="ui form">
            <Input
              label="E-mail"
              handleFieldChange={handleFormValuesChange}
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
            />
            <Input
              label="Password"
              handleFieldChange={handleFormValuesChange}
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
            <Button className="ui button" type="submit" name="LOGIN" />
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
