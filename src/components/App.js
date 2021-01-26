import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Dashboard from "./dashboard/Dashboard";
import Header from './Header'
import SignIn from './auth/SignIn'
import SignUp from './auth/SignUp'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
