import React, { Component } from "react";
import API from "../../services/api";
import { withRouter } from "react-router-dom";

class Reviews extends Component {
  async componentDidMount() {
    const id = this.props.id;
    console.log(id);
    await API.getReviews(420818);
  }
  render() {
    return (
      <>
        <h2>Reviews</h2>
      </>
    );
  }
}

export default withRouter(Reviews);
