import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from '../components/Login';
import {Registro} from '../components/Registro';

export default function AppRouter() {
  return (
    <Router>
      <div>

        <Switch>
          <Route exact path="/"  component={Login}/>
          <Route exact path="/registro"  component={Registro}/>
        </Switch>
      </div>
    </Router>
  );
}