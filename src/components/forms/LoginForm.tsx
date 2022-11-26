import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

/* components */
import { LoginIcon } from "../icons";
import loginFormFields from "./formStructures/loginFormFields";

/* action */
import { login } from "../../features/loginUserSlice";

/* styles */
import styles from "./LoginForm.module.css";

/* interfaces */
import FormGenerator from "./subComponents/FormGenerator";

interface LoginFormType {
  closeModal?: () => void;
}

const LoginForm: React.FC<LoginFormType> = ({ closeModal }) => {
  const [formData, setFormData] = useState<any>();

  const dispatch = useDispatch();
  const redirect = useNavigate();

  /* TODO: this must be happend on the backend, these data comes form DB */
  const users = useSelector((state: any) => state.users.value);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.messy) {
      /* TODO: this checking happends on the backend, I didn't has better idea*/
      const user = users.find(
        (user: any) =>
          user.username === formData.username &&
          user.password === formData.password
      );

      if (user) {
        dispatch(login(user));
        closeModal && closeModal();
        redirect("/gallery");
      } else {
        // setError("Username or password is incorrect!");
      }
    }
  };

  return (
    <FormGenerator
      setFormData={setFormData}
      formFields={loginFormFields}
      handleSubmit={handleLogin}
      submitButtonIcon={<LoginIcon />}
      submitButtonLabel="Login"
    />
  );
};
export default LoginForm;
