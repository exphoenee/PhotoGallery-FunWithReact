import React from "react";
import { Link } from "react-router-dom";

/* Components */
import Button from "../Button";

/* Mock hooks */
import getUser from "../../../hooks/useUser";
import { CameraIcon } from "../../icons";

/* styles */
import styles from "./Avatar.module.css";

/* types */
import UserType from "../../../types/UserType";

export interface AvatarProps {
  user: UserType;
  edit?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

const Avatar: React.FC<AvatarProps> = ({ user, edit = false, size = "lg" }) => {
  const loggedInUser = getUser();

  return (
    <div className={styles[size]}>
      <div className={styles.profileImage}>
        <Link
          to={loggedInUser?.id === user.id ? `/profile` : `/user/${user.id}`}
        >
          <img
            src={
              user?.photo ||
              "https://upload.wikimedia.org/wikipedia/commons/a/ad/Placeholder_no_text.svg"
            }
            alt={user?.username}
          />
        </Link>
      </div>
      {edit && (
        <Button
          className={styles.editProfileImage}
          onClick={() => console.log("edit profile image")}
          circular
          icon={<CameraIcon />}
        />
      )}
    </div>
  );
};

export default Avatar;
