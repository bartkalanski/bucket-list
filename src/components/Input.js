import React from "react";
import { connect } from "react-redux";

const Input = () => {
  return (
    <React.Fragment>
      <form class="ui form">
        <div class="field">
          <label>Destination</label>
          <input
            type="text"
            name="first-name"
            placeholder="Add your destination"
          ></input>
        </div>
        <button class="ui button" type="submit">
          Add
        </button>
      </form>
    </React.Fragment>
  );
};

export default connect()(Input);
