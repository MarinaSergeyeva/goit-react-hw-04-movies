import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
// import Home from "../pages/Home";
// import MoviesPage from "../pages/MoviesPage";
// import MovieDetailsPage from "../pages/MovieDetailsPage";

const Home = lazy(() => import("../pages/Home"));
const MoviesPage = lazy(() => import("../pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../pages/MovieDetailsPage"));

export default function App() {
  return (
    <>
      <Navigation />
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movies/:movieId" component={MovieDetailsPage} />
            <Route path="/movies" component={MoviesPage} />
          </Switch>
        </Suspense>
      </div>
    </>
  );
}
