import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'

import { signOut } from '../actions/index'
const Header = () => {
  
  //const authStatus = useSelector(state => console.log('state',state))
  const dispatch = useDispatch()
  const firebase = useFirebase()

  const handleSignOut = (e) => {
    if(e) signOut(dispatch, firebase)
  }
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
          <a onClick={handleSignOut} class="ui item">Logout</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
