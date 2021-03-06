import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFirestore } from "react-redux-firebase";
import { Redirect } from "react-router-dom";

import { addDestination } from "../../actions/index";
import Form from "./Form";
import Results from "./Results";
import Heading from "../reuscore/Heading";
import Loader from "../reuscore/Loader";

const Dashboard = () => {
  const dispatch = useDispatch();
  const firestore = useFirestore();
  const auth = useSelector((state) => state.firebase.auth);
  const profile = useSelector((state) => state.firebase.profile);
  //const state = useSelector((state) => console.log('state', state))
  const handleSubmit = (value) => {
    if (!value.destination) {
      return;
    }
    addDestination(dispatch, value.destination, firestore, profile, auth);
  };
  if (!auth.uid) return <Redirect to="/signin" />;

  if (!profile.firstName) return <Loader />;
  return (
    <div className="ui container">
      <Heading firstName={profile.firstName} />
      <Form onSubmit={handleSubmit} />
      <div className="ui divider"></div>
      <Results />
    </div>
  );
};

export default Dashboard;
