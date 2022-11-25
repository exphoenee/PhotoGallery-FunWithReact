import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

/* Components */
import FormGenerator from "./subComponents/FormGenerator";
import { RegisterIcon } from "../icons";

/* Mock hook */
import getUser from "../../hooks/useUser";

/* Redux action */
import { changePassword } from "../../features/registerUsersSlice";

/* Styles */
import styles from "./RegisterForm.module.css";

/* Interfaces */
import passwordChangeFormFields from "./formStructures/passwordChangeFormFields";

export interface PasswordChangeFormProps {
  closeModal?: () => void;
}

/* TODO: these too many states is too messy ther would be nice to use a form generator class or an out of box solution Formik + Yup */
const PasswordChangeForm: React.FC<PasswordChangeFormProps> = ({
  closeModal,
}) => {
  const [formData, setFormData] = useState<any>();

  const dispatch = useDispatch();

  /* TODO: this must be happend on the backend, these data comes form DB */
  const users = useSelector((state: any) => state.users.value);
  const user = getUser();

  const handlePasswordChange = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.messy) {
      dispatch(changePassword({ ...user, password: formData.password }));
      closeModal && closeModal();
    }
  };

  return (
    <FormGenerator
      formFields={passwordChangeFormFields}
      handleSubmit={handlePasswordChange}
      setFormData={setFormData}
      submitButtonIcon={<RegisterIcon />}
      submitButtonStyle={styles.singUpBtn}
      submitButtonLabel="Save"
    />
  );
};
export default PasswordChangeForm;
