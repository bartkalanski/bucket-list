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

  const userInitials = profile.initials ? (
    <div className="circular ui icon button">{profile.initials}</div>
  ) : null;
  const userStatus = auth.uid
    ? [<SignedInLinks />, "Logout"]
    : [<SignedOutLinks />, "Login"];

  const handleSignOut = (e) => {
    if (e) signOut(dispatch, firebase);
  };

  return (
    <div className="ui container">
      <div className="ui secondary pointing menu">
        {userStatus[0]}
        <div className="right menu" style={{ margin: "1px" }}>
          {userInitials}
          <button onClick={handleSignOut} className="ui item" type="button">
            {userStatus[1]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
