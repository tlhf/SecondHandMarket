import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router";

import Login from "./Login";
import Home from "./Home";

function Main(props) {
    const { isLoggedIn, handleLoggedIn } = props;
    const showLogin = () => {
        return isLoggedIn ? (
          <Redirect to="/home" />
        ) : (
          <Login handleLoggedIn={handleLoggedIn} />
        );
    };
    const showHome = () => {
        return isLoggedIn ? <Home /> : <Redirect to="/login" />;
      };
    return <div className="main">
    <Switch>
       <Route path="/" exact render={showHome} />
       <Route path="/login" render={showLogin} />
       <Route path="/home" render={showHome} />
     </Switch>
    </div>;
}

export default Main;