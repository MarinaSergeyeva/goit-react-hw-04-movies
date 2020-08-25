import React, { Component } from "react";
import styles from "./Button.module.css";
import { withRouter } from "react-router-dom";

class Button extends Component {
  handleGoBack = () => {
    const {
      location: { state },
      history,
    } = this.props;

    if (state?.from) {
      return history.push(state.from);
    }

    history.push("/");
  };

  render() {
    return (
      <div className={styles.buttonWrapper}>
        <button type="button" onClick={this.handleGoBack}>
          Go back
        </button>
      </div>
    );
  }
}

export default withRouter(Button);
