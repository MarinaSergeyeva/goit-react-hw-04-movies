import React, { Component } from "react";
import API from "../../services/api";
import { Link } from "react-router-dom";

export default class TrendingList extends Component {
  state = {
    trendingList: [],
  };

  async componentDidMount() {
    await API.getTrending().then((trendingList) => {
      this.setState((prevState) => ({
        trendingList: [...prevState.trendingList, ...trendingList],
      }));
    });
    console.log("this.state", this.state);
  }

  render() {
    const { trendingList } = this.state;
    return (
      <ul>
        {trendingList.map((item) => (
          <Link
            key={item.id}
            to={{
              pathname: `/${item.id}`,
            }}
          >
            <li>{item.title ? item.title : item.original_name}</li>
          </Link>
        ))}
      </ul>
    );
  }
}
