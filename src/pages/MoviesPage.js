import React, { Component } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";

import styles from "./MoviesPage.module.css";

export default class MoviesPage extends Component {
  state = {
    searchQuery: "",
    searchList: []
  };

  handleChange = e => {
    this.setState({
      searchQuery: e.target.value
    });
  };

  search = async (e, query) => {
    query = this.state.searchQuery;
    e.preventDefault();

    await API.searchMovie(query).then(({ data }) => {
      this.setState({
        searchList: data.results,
        searchQuery: ""
      });
    });
  };

  render() {
    const { searchList } = this.state;

    return (
      <>
        <form onSubmit={this.search} className={styles.searchForm}>
          <input type="text" name="search" onChange={this.handleChange} />
          <button type="submit">Search</button>
        </form>

        <ul className={styles.searchList}>
          {searchList.map(item => (
            <Link
              key={item.id}
              to={{
                pathname: `/movies/${item.id}`
              }}
            >
              <li>{item.title}</li>
            </Link>
          ))}
        </ul>
      </>
    );
  }
}
