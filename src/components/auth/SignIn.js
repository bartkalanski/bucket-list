import React, { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState({ email: "" });
  const [password, setPassword] = useState({ password: "" });
  const handleChange = (e) => {
   return e.target.id === "email"
      ? setEmail({ email: e.target.value })
      : setPassword({ password: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
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
          <button class="ui button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
