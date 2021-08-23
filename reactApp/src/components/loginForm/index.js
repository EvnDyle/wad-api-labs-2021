import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import { PublicPage, Movies, Profile, HomePage } from "../../sample/pages";
import LoginPage from "../../pages/loginPage";
import SignUpPage from "../../pages/signUpPage";
import PrivateRoute from "../../sample/privateRoute";
import AuthHeader from "../authHeader/authHeader";
import AuthProvider from "../../contexts/authContext";
import MovieProvider from "../../contexts/moviesContext - OLD";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AuthHeader />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/public">Public</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
        <MovieProvider>
            <Switch>
              <Route path="/public" component={PublicPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/signup" component={SignUpPage} />,
              <Route exact path="/" component={HomePage} />
              <PrivateRoute path="/movies" component={Movies} />
              <PrivateRoute path="/profile" component={Profile} />
              <Redirect from="*" to="/" />
              </Switch>
        </MovieProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));