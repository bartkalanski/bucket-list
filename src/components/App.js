import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Dashboard from "./dashboard/Dashboard";
import Header from './Header'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
