import React from 'react'
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <NavLink to="/Home" activeClassName="active" className="item">
      Home
    </NavLink>
  );
};

export default SignedInLinks