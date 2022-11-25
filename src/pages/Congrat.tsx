import React from "react";
import { Link } from "react-router-dom";

/* styles */
import styles from "./Congrat.module.css";

const Congrat = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Congratulations!!!</h1>
      <img
        className={styles.image}
        src="https://picsum.photos/id/486/640/480"
        alt="congratultaions"
      />
      <Link to="/" className={styles.back}>
        Back to home
      </Link>
    </div>
  );
};

export default Congrat;
