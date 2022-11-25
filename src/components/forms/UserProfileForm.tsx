import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

/* redux actions */
import { update, deleteUser } from "../../features/registerUsersSlice";
import { login, logout } from "../../features/loginUserSlice";

/* Components */
import Button from "../common/Button/Button";
import ConfirmationModal from "../modals/ConfirmationModal";
import Avatar from "../common/Avatar/Avatar";
import FormGenerator from "./subComponents/FormGenerator";
import {
  CancelIcon,
  DeleteIcon,
  EditIcon,
  SaveIcon,
  AdminIcon,
  UserIcon,
} from "../icons";

/* Interfaces */

import userProfileFromFields from "./formStructures/userProfileFromFields";

/* styles */
import styles from "./UserProfileForm.module.css";

/* mock hooks */
import getUser from "../../hooks/useUser";

/* Mock data */
import UserType from "./../../types/UserType";
import PasswordChangeModal from "../modals/PasswordChangeModal";

/* Constants */

interface UserProfileFormProps {
  user: UserType | null;
  layout?: "card" | "form";
  editable?: boolean;
  passwordChange?: boolean;
}

const UserProfileForm: React.FC<UserProfileFormProps> = ({
  user,
  layout = "form",
  editable = true,
  passwordChange = true,
}) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState<any>();
  const [edit, setEdit] = useState<boolean>(false);
  const [confirmIsOpen, setConfirmIsOpen] = useState<boolean>(false);
  const [passwordChangeIsOpen, setPasswordChangeIsOpen] =
    useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newUser: UserType = {
      ...(user as UserType),
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      username: formData.username,
    };

    dispatch(update(newUser));
    /* TODO: in normal situation we getting the updated user form server adn updating them in the session storage it is the same here */
    /* DANGER: this must be validate on the backend */
    dispatch(login(newUser));
    setEdit(false);
  };

  // TODO: discard feature will be solved in FormGenerator
  const handleDiscard = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    user: UserType
  ) => {
    e.preventDefault();
    // setEdit(false);
    // setUsername(user?.username);
    // setEmail(user?.email);
    // setFirstName(user?.firstName);
    // setLastName(user?.lastName);
  };

  /* TODO: here would be nice to have a confirmation modal */
  const handleDelete = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    user: UserType
  ) => {
    e.preventDefault();
    dispatch(deleteUser(user));
    dispatch(logout(user));
    redirect("/");
  };

  const redirect = useNavigate();

  const currentUser = getUser();

  const addProp = [
    {
      name: "firstName",
      disabled: !edit,
    },
    {
      name: "lastName",
      disabled: !edit,
    },
    {
      name: "username",
      disabled: !edit,
    },
    {
      name: "email",
      disabled: !edit,
    },
    {
      name: "role",
      icon: user?.role === "admin" ? <AdminIcon /> : <UserIcon />,
    },
  ];

  const fields = userProfileFromFields.map((field) => {
    return {
      ...field,
      ...addProp.find((add) => add.name === field.name),
    };
  });

  return user ? (
    <>
      <FormGenerator
        formFields={fields}
        handleSubmit={handleSubmit}
        setFormData={setFormData}
        withoutSubmit
        beforeFormFields={
          <>
            <h1 className={styles.title}>
              {`${user.username}'s profile${
                user.username === currentUser?.username ? " (you)" : ""
              }`}
            </h1>
            <hr />
            <div className={styles.profile}>
              <Avatar edit={edit} user={user} />
              <div
                className={
                  layout === "card"
                    ? styles.profileInfoCard
                    : styles.profileInfoForm
                }
              ></div>
            </div>
          </>
        }
        afterFormFields={
          <>
            <div className={styles.buttonContainer}>
              {editable &&
                (edit ? (
                  <div className={styles.editorContainer}>
                    <Button
                      type="button"
                      label="Discard"
                      icon={<CancelIcon />}
                      onClick={(e) => handleDiscard(e, user)}
                    />
                    <Button
                      type="button"
                      label="Delete"
                      onClick={(e) => setConfirmIsOpen(true)}
                      icon={<DeleteIcon />}
                    />
                    {(passwordChange ||
                      user.username === currentUser?.username) && (
                      <Button
                        type="button"
                        label="Password change"
                        onClick={(e) => setPasswordChangeIsOpen(true)}
                        icon={<EditIcon />}
                      />
                    )}
                    <Button type="submit" label="Save" icon={<SaveIcon />} />
                  </div>
                ) : (
                  <Button
                    label="Edit Profile"
                    icon={<EditIcon />}
                    onClick={() => setEdit(true)}
                  />
                ))}
            </div>
          </>
        }
      />
      <ConfirmationModal
        title="Delete User Account"
        message="Are you sure you want to delete your account? This action cannot be undone!"
        isOpen={confirmIsOpen}
        setIsOpen={setConfirmIsOpen}
        width="sm"
        onConfirm={(e) => handleDelete(e, user)}
      />
      <PasswordChangeModal
        isOpen={passwordChangeIsOpen}
        setIsOpen={setPasswordChangeIsOpen}
        onClose={() => setEdit(false)}
      />
    </>
  ) : (
    <p>User doesn't exists.</p>
  );
};

export default UserProfileForm;
