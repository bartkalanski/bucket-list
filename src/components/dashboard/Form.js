import React from "react";
import { Field, reduxForm } from "redux-form";

let Form = ({ handleSubmit }) => {

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} className="ui form">
        <div className="field">
          <label htmlFor="destination">Destination</label>
          <Field name="destination" component="input" type="text" placeholder="Add your destination"/>
        </div>
        <button className="ui blue button">Add</button>
      </form>
    </React.Fragment>
  );
};

Form = reduxForm({
  form: "destinationForm",
})(Form);

export default Form;
