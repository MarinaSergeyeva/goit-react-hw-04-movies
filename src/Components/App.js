import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./Navigation/Navigation";

export default function App() {
  return (
    <>
      <div>
        <Route path="/navigation" component={<Navigation />} />
      </div>
      <div>
        {/* <Switch>
          <Route path="/" component={<HomePage />} />
          <Route path="/movies" component={<MoviesPage />} />
          <Route path="/movies/:movieId" component={<MovieDetailsPage />} />
          <Route path="/movies/:movieId/cast" component={<Cast />} />
          <Route path="/movies/:movieId/reviews" component={<Reviews />} />
        </Switch> */}
      </div>
    </>
  );
}
