import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFirestore } from "react-redux-firebase";
import { Redirect } from "react-router-dom";

import { addDestination } from "../../actions/index";
import Form from "./Form";
import List from "./List";
import Heading from '../reuscore/Heading'

const Dashboard = () => {
  const dispatch = useDispatch();
  const firestore = useFirestore();
  const auth = useSelector((state) => state.firebase.auth);
  const profile = useSelector((state) => state.firebase.profile);

  const handleSubmit = (value) => {
    if (!value.destination) {
      return;
    }
    addDestination(dispatch, value.destination, firestore, profile, auth);
  };
  if (!auth.uid) return <Redirect to="/signin" />;
  return (
    <div className="ui container">
      <Heading firstName={profile.firstName}/>
      <Form onSubmit={handleSubmit} />
      <div className="ui divider"></div>
      <List />
    </div>
  );
};

export default Dashboard;
