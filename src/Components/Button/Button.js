import React, { Component } from "react";
import styles from "./Button.module.css";
import { withRouter } from "react-router-dom";

class Button extends Component {
  goBack = () => {
    console.log(this.props);
  };
  render() {
    return (
      <div className={styles.buttonWrapper}>
        <button type="button" onClick={this.goBack}>
          Go back
        </button>
      </div>
    );
  }
}

export default withRouter(Button);
