import React /* , { useEffect } */ from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { logout } from "../features/loginUserSlice";

/* styles */
import styles from "./Logout.module.css";

const Logout = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  dispatch(logout({}));
  // }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>You Logged out!</h1>
      <img
        className={styles.image}
        src="https://picsum.photos/id/486/640/480"
        alt="congratultaions"
      />
      <Link to="/login" className={styles.back}>
        Login again?
      </Link>
    </div>
  );
};

export default Logout;
