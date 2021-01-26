import React, { useState } from "react";

const SignUp = () => {
  const [formValues, setFormValues] = useState({});

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };
  return (
    <div className="ui container" style={{ marginTop: "10vh" }}>
      <div className="ui segment">
        <form onSubmit={handleSubmit} class="ui form">
          <div class="field">
            <label htmlFor="email">E-mail</label>
            <input
              onChange={handleChange}
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
            />
          </div>
          <div class="field">
            <label>Password</label>
            <input
              onChange={handleChange}
              type="text"
              id="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <div class="field">
            <label htmlFor="firstName">First Name</label>
            <input
              onChange={handleChange}
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
            />
          </div>
          <div class="field">
            <label>Last Name</label>
            <input
              onChange={handleChange}
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
            />
          </div>
          <button class="ui button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
