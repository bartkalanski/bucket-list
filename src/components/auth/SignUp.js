import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { useFirestore, useFirebase } from "react-redux-firebase";

import { signUp } from "../../actions/authActions";
import Input from "../reuscore/Input";
import Button from "../reuscore/Button";
import Error from '../reuscore/Error'

const SignUp = () => {
  const [formValues, setFormValues] = useState({});
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.firebase.auth);
  const firestore = useFirestore();
  const firebase = useFirebase();
  const authError = useSelector((state) => state.authReducer.authError);

  const handleFormValuesChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(dispatch, firebase, firestore, formValues);
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
            <Input
              label="First Name"
              handleFieldChange={handleFormValuesChange}
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
            />
            <Input
              label="Last Name"
              handleFieldChange={handleFormValuesChange}
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
            />
            <Button className="ui button" type="submit" name="SUBMIT" />
            <Error err={authError}/>
          </form>
        </div>
      </div>
    );
  return <Redirect to="/home" />;
};

export default SignUp;
