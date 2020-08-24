import React, { Component } from "react";
import { withRouter, NavLink, Route, Switch } from "react-router-dom";
import API from "../services/api";
import Cast from "../Components/Cast/Cast";
import Reviews from "../Components/Reviews/Reviews";

import styles from "./MovieDeteilsPage.module.css";

class MovieDetailsPage extends Component {
  state = {
    movie: {},
    title: "",
    score: "",
    overview: "",
    genres: [],
    img: ""
  };
  async componentDidMount() {
    const id = this.props.match.params.movieId;

    await API.getMovieInfo(id).then(({ data }) =>
      this.setState({
        movie: data,
        title: data.title,
        genres: data.genres,
        score: data.popularity,
        overview: data.overview,
        img: data.poster_path
      })
    );
  }

  render() {
    const { img, title, movie, score, overview, genres } = this.state;
    const id = this.props.match.params.movieId;
    const { match } = this.props;

    // const release_year = movie.release_date.split("-");
    // console.log(release_year);

    return (
      <div>
        <div className={styles.movieInfoWrapper}>
          <img className={styles.poster} src={`https://image.tmdb.org/t/p/w500/${img}`} alt={title} width="250" />

          <div className={styles.movieInfo}>
            <h2>
              {title} ({movie.release_date})
            </h2>

            <p>User score: {Math.round(score)}%</p>

            <h3>Overview</h3>
            <p>{overview}</p>

            <h4>Genres</h4>
            <ul className={styles.genresList}>
              {genres.map(genre => (
                <li className={styles.genre} key={genre.id}>
                  {genre.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <p>Additional information</p>
          <ul>
            <NavLink to={`${match.url}/cast`} className={styles.additionalItem}>
              Cast
            </NavLink>
            <NavLink to={`${match.url}/reviews`} className={styles.additionalItem}>
              Reviews
            </NavLink>
          </ul>

          {/* <Reviews /> */}
        </div>
        <Switch>
          <Route path={`${match.url}/cast`} render={props => <Cast {...props} id={id} />} />
          <Route path={`${match.url}/cast`} render={props => <Reviews {...props} id={id} />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(MovieDetailsPage);
