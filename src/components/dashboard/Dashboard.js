import React from "react";
import { useDispatch } from "react-redux";
import { useFirestore } from "react-redux-firebase";

import { addDestination } from ".././../actions/index";
import Form from "./Form";
import List from "./List";

const Dashboard = () => {
  //const dispatch = useDispatch();
  const firestore = useFirestore();

  const addNewDestination = (destinationName) => {
    firestore
      .collection("list")
      .add({
        destination: destinationName,
      })
      .then((docRef) => {
        docRef.update({
          destinationID: docRef.id,
        });
      });
  };

  const submit = (value) => {
    if (value.destination === undefined) {
      return;
    }
    addNewDestination(value.destination);
    //addDestination(dispatch, value.destination);
  };
  return (
    <div className="ui container">
      <div className="ui divider"></div>
      <h1 className="ui center aligned header">Create Your Bucket List</h1>
      <Form onSubmit={submit} />
      <div className="ui divider"></div>
      <List />
    </div>
  );
};

export default Dashboard;
