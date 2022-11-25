import React from "react";

/* components */
import LoginForm from "../components/forms/LoginForm";

/* styles */
import styles from "./Login.module.css";

const Login: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Please login</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. A libero
        fugiat quas exercitationem beatae ullam placeat temporibus odio repellat
        fugit minus blanditiis eaque eum, vitae quia, in molestias. Cupiditate
        officia, eligendi porro saepe neque sit quas? Repellendus laboriosam
        nisi quae est! Cumque unde dign
      </p>
      <LoginForm />
    </div>
  );
};
export default Login;
