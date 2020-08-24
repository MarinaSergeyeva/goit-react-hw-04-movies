import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <header>
      <nav>
        <ul className={styles.navigation}>
          <li>
            <NavLink className={styles.navigationItem} activeClassName={styles.navigationItemActive} exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.navigationItem} activeClassName={styles.navigationItemActive} to="/movies">
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
