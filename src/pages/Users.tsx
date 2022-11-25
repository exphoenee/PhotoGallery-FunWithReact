import React, { useState } from "react";
import { useSelector } from "react-redux";
import UserProfileForm from "../components/forms/UserProfileForm";

/* components */
// import UserCard from "../components/forms/UserCard";

/* styles */
import styles from "./Users.module.css";

const Users: React.FC = () => {
  const users = useSelector((state: any) => state.users.value);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>List of users</h1>
      {users.map((user: any) => (
        <div className={styles.card}>
          <UserProfileForm passwordChange={false} user={user} layout="card" />
        </div>
      ))}
    </div>
  );
};
export default Users;
