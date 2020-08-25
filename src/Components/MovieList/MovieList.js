import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MovieList extends Component {
  state = {
    list: []
  };

  componentDidMount() {
    this.setState({
      list: [...this.props.list]
    });
  }

  render() {
    console.log("LIST", this.state);
    const { list } = this.state;
    return (
      <ul>
        {list.map(item => (
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
      //   <ul className={styles.trendingList}>
      //     {trendingList.map(item => (
      //       <li key={item.id}>
      //         <Link
      //           to={{
      //             pathname: `/movies/${item.id}`
      //           }}
      //         >
      //           {item.title ?? item.original_name}
      //         </Link>
      //       </li>
      //     ))}
      //   </ul>
    );
  }
}
