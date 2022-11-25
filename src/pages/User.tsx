import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

/* Componenet */
import UserProfileForm from "../components/forms/UserProfileForm";

/* redux selectors */

/* components */
// import UserCard from "../components/forms/UserCard";

/* styles */
import styles from "./Profile.module.css";

const Users: React.FC = () => {
  let { userid } = useParams();
  console.log(userid);
  const users = useSelector((state: any) => state.users.value);
  const user = users.find((user: any) => user.id === userid);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <UserProfileForm user={user} editable={false} />
      </div>
    </div>
  );
};
export default Users;
