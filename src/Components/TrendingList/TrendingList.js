import React, { Component } from "react";
import API from "../../services/api";
import { Link } from "react-router-dom";

export default class TrendingList extends Component {
  state = {
    trendingList: []
  };

  async componentDidMount() {
    await API.getTrending().then(trendingList => {
      this.setState(prevState => ({
        trendingList: [...prevState.trendingList, ...trendingList]
      }));
    });
    console.log("this.state", this.state);
  }

  render() {
    const { trendingList } = this.state;
    return (
      <ul>
        {trendingList.map(item => (
          <li key={item.id}>
            <Link
              to={{
                pathname: `/movies/${item.id}`
              }}
            >
              {item.title ?? item.original_name}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}
