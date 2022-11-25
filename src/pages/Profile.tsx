import React from "react";

/* Components */
import UserProfileForm from "../components/forms/UserProfileForm";

/* styles */
import styles from "./Profile.module.css";

/* Mock hooks */
import getUser from "../hooks/useUser";

/* types */

const Profile: React.FC = () => {
  return (
    <div className={styles.container}>
      <UserProfileForm user={getUser()} />
    </div>
  );
};

export default Profile;
