import React from "react";
import { useDispatch } from "react-redux";

import { addDestination } from "../actions/index";
import Form from "./Form";
import List from "./List";

const App = () => {
  const dispatch = useDispatch();
  const submit = (value) => {
    addDestination(dispatch, value.destination);
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

export default App;
