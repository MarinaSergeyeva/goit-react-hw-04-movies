import React, { Component } from "react";

export default class MoviesPage extends Component {
  state = {
    searchQuery: "",
  };

  getQuery = (e) => {
    console.log(e.target);

    const target = e.target;
    const { value } = target;

    if (value) {
      this.setState({
        searchQuery: value,
      });
    }
  };

  search = (query) => {
    api.searchMovie(query);
  };

  render() {
    return (
      <>
        <form onSubmit={this.search}>
          <input type="text" name="search" />
          <button type="submit">Search</button>
        </form>
      </>
    );
  }
}
