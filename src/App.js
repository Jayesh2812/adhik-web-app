import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from "react-router-dom";
import "./App.css";
import { auth } from "./components/firebase";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { useStateValue } from "./components/StateProvider";
import Profile from './components/Profile'

function App() {
  const [{ user }, dispatch] = useStateValue();
  //
  useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      unsubcribe();
    };
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            {user && <Redirect to="/"/>}
            <Login />
          </Route>
          <Route path="/create">
          {user && <Redirect to="/"/>}
            <SignUp />
          </Route>
          <Route path="/">
          {!user && <Redirect to="/login" />}
            <Profile/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
