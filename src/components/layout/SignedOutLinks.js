import React from 'react'
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <React.Fragment>
      <NavLink to="/Signin" activeClassName="active" className="item">
        Sign In
      </NavLink>
      <NavLink to="/Signup" activeClassName="active" className="item">
        Sign Up
      </NavLink>
    </React.Fragment>
  );
};

export default SignedOutLinks;
