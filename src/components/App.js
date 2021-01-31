import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Dashboard from "./dashboard/Dashboard";
import Header from "./layout/Header";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path={["/", "/Home"]} component={Dashboard} />
        <Route exact path="/Signin" component={SignIn} />
        <Route exact path="/Signup" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
