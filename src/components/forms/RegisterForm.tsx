import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

/* components */
import FormGenerator from "./subComponents/FormGenerator";

/* redux action */
import { register } from "../../features/registerUsersSlice";

/* Constants */
import registerFormFields from "./formStructures/registerFormFields";

/* styles */
import styles from "./RegisterForm.module.css";
import { RegisterIcon } from "../icons";

export interface registerFormType {
  closeModal?: () => void;
}

/* TODO: these too many states is too messy ther would be nice to use a form generator class or an out of box solution Formik + Yup */
const Register: React.FC<registerFormType> = ({ closeModal }) => {
  const [formData, setFormData] = useState<any>();

  const dispatch = useDispatch();
  const redirect = useNavigate();

  /* TODO: this must be happend on the backend, these data comes form DB */
  const users = useSelector((state: any) => state.users.value);

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.formIsMessy) {
      /* TODO: this checking happends on the backend, I didn't has better idea*/
      const user = users.find(
        (user: any) =>
          user.username === formData.username.value &&
          user.password === formData.password.value
      );

      if (user) {
        setFormData((prevData: any) => {
          return {
            ...prevData,
            username: {
              ...prevData.username,
              error: "Username already exists",
            },
          };
        });
      } else {
        dispatch(
          register({
            username: formData.username.value,
            password: formData.password.value,
          })
        );
        closeModal && closeModal();
        redirect("/congrat");
      }
    }
  };

  return (
    <div className={styles.instructions}>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. A libero
        fugiat quas exercitationem beatae ullam placeat temporibus odio repellat
        fugit minus blanditiis eaque eum, vitae quia, in molestias. Cupiditate
        officia, eligendi porro saepe neque sit quas? Repellendus laboriosam
        nisi quae est! Cumque unde dign
      </p>
      <FormGenerator
        handleSubmit={handleRegister}
        formFields={registerFormFields}
        submitButtonIcon={<RegisterIcon />}
        submitButtonLabel="Sign up"
        setFormData={setFormData}
      />
    </div>
  );
};
export default Register;
