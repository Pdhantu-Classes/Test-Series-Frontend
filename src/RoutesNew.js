import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Routes = () => {
 
    return (
      <BrowserRouter>
        <Switch>
            <Route exact path="/" render={() => (window.location = "https://usofi.courses.store/")} />
          </Switch>
    </BrowserRouter>
  );
};
export default Routes;