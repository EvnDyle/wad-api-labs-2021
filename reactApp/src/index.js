import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import PrivateRoute from './routes'
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import FavoriteMoviesPage from './pages/favoritesMoviesPage'
import MovieReviewPage from "./pages/movieReviewPage";
import TopRatedPage from "./pages/topRatedPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import WatchlistPage from "./pages/watchlistPage";
import PopularPage from "./pages/popularPage";
import SiteHeader from './components/siteHeader'
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import LoginPage from './pages/loginPage'
import SignUpPage from './pages/signUpPage'
import AuthProvider from "./contexts/authContext";

const App = () => {
  return (
    <BrowserRouter>
      <div className="jumbotron">\
      <AuthProvider>
        <SiteHeader /> 
        <div className="container-fluid">
          <MoviesContextProvider>
            <GenresContextProvider>
              <Switch> 
                <PrivateRoute exact path="/reviews/form" component={AddMovieReviewPage} />
                <PrivateRoute path="/reviews/:id" component={MovieReviewPage} />
                <PrivateRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
                <PrivateRoute exact path="/movies/upcoming" component={UpcomingMoviesPage} />
                <PrivateRoute exact path="/movies/watchlist" component={WatchlistPage} />
                <PrivateRoute exact path="/movies/top-rated" component={TopRatedPage} />
                <PrivateRoute exact path="/movies/popular" component={PopularPage} />
                <PrivateRoute path="/movies/:id" component={MoviePage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/signup" component={SignUpPage} />
                <Route path="/" component={HomePage} />
                <Redirect from="*" to="/" />
              </Switch>
            </GenresContextProvider>
          </MoviesContextProvider>
        </div>
        </AuthProvider>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));