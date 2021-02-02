import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFirebase } from "react-redux-firebase";

import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { signOut } from "../../actions/authActions";

const Header = () => {
  const auth = useSelector((state) => state.firebase.auth);
  const profile = useSelector((state) => state.firebase.profile);
  const dispatch = useDispatch();
  const firebase = useFirebase();

  const handleSignOut = (e) => {
    if (e) signOut(dispatch, firebase);
  };
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
  return (
    <div className="ui container">
      <div class="ui secondary pointing menu">
        {links}
        <div class="right menu">
          {profile.initials ? (
            <button
              class="circular ui icon button"
              style={{ height: "90%", width: "90%", alignSelf: "center" }}
            >
              {profile.initials}
            </button>
          ) : null}
          <a onClick={handleSignOut} class="ui item">
            {auth.uid ? "Logout" : "Login"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
