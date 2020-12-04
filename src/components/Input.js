import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Input = () => {
  const dispatch = useDispatch();
  const destinations = useSelector((state) => state.destinations);
  const onFormSubmit = (event) => {
    event.preventDefault();
    const value = event.target[0].value;
    dispatch({ type: "ADD_DESTINATION", payload: value });
  };
  return (
    <React.Fragment>
      <form onSubmit={onFormSubmit} class="ui form">
        <div class="field">
          <label>Destination</label>
          <input
            type="text"
            name="destination"
            placeholder="Add your destination"
          ></input>
        </div>
        <button class="ui button">Add</button>
      </form>
    </React.Fragment>
  );
};

export default Input;
