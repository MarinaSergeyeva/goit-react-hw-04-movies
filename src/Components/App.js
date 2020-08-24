import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import Home from "../pages/Home";
import MoviesPage from "../pages/MoviesPage";
import MovieDetailsPage from "../pages/MovieDetailsPage";

export default function App() {
  return (
    <>
      <Navigation />
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Route path="/movies" component={MoviesPage} />
          {/* <Route path="/movies/:movieId/reviews" component={<Reviews />} /> */}
        </Switch>
      </div>
    </>
  );
}
