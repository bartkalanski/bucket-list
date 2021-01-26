import React from "react";
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="ui container">
      <div class="ui secondary pointing menu">
      <Link to="/" className="active item">Home</Link>
        <Link to="/signin" className="item">Sign In</Link>
        <Link to="/signup" className="item">Sign Up</Link>
        <div class="right menu">
          <div class="ui item">Logout</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
