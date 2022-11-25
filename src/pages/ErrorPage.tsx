import React from "react";
import { Link } from "react-router-dom";

import styles from "./ErrorPage.module.css";

import monkey from "../assets/monkey.gif";

const ErrorPage = () => {
  return (
    <div className={styles.errorPage}>
      <h1>
        Oooops that's an <span>error</span>!!!
      </h1>
      <img src={monkey} alt="error" />
      <Link to="/">
        <a href="/">Back to Home!</a>
      </Link>
    </div>
  );
};

export default ErrorPage;
