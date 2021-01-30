import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux'

const Header = () => {
  
  const authStatus = useSelector(state => console.log('state',state))
  return (
    <div className="ui container">
      <div class="ui secondary pointing menu">
        <NavLink to="/Home" activeClassName='active' className="item">
          Home
        </NavLink>
        <NavLink to="/Signin" activeClassName='active' className="item">
          Sign In
        </NavLink>
        <NavLink to="/Signup" activeClassName='active' className="item">
          Sign Up
        </NavLink>
        <div class="right menu">
          <div class="ui item">Logout</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
