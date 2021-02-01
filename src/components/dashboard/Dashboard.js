import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFirestore } from "react-redux-firebase";
import { Redirect } from 'react-router-dom'

import { addDestination } from "../../actions/index";
import Form from "./Form";
import List from "./List";

const Dashboard = () => {
  const dispatch = useDispatch();
  const firestore = useFirestore();
  const auth = useSelector(state => state.firebase.auth)
  const profile = useSelector(state => state.firebase.profile)

  const submit = (value) => {
    if (value.destination === undefined) {
      return;
    }
    addDestination(dispatch, value.destination, firestore, profile, auth);
  };
  if(!auth.uid) return <Redirect to="/signin"/>
  return (
    <div className="ui container">
      <div className="ui divider"></div>
      <h1 className="ui center aligned header">{profile.firstName}'s Bucket List</h1>
      <Form onSubmit={submit} />
      <div className="ui divider"></div>
      <List />
    </div>
  );
};

export default Dashboard;
