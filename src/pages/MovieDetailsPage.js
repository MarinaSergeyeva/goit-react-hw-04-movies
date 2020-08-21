import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import API from "../services/api";

class MovieDetailsPage extends Component {
  state = {
    movie: {},
    title: "",
    score: "",
    overview: "",
    genres: [],
    img: "",
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
        img: data.poster_path,
      })
    );
  }

  render() {
    const { img, title, score, overview, genres } = this.state;

    return (
      <div>
        <img src={img} alt="#" />
        <h2>{title}</h2>
        <p>{score}</p>
        <p>{overview}</p>
        {/* <p>{...genres}</p> */}
      </div>
    );
  }
}

export default withRouter(MovieDetailsPage);
