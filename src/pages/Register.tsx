import React from "react";

/* components */
import RegisterForm from "../components/forms/RegisterForm";

/* styles */
import styles from "./Register.module.css";

const Register: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Please Register</h1>
      <RegisterForm />
    </div>
  );
};
export default Register;
