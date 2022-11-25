import UserType from "../types/UserType";

const getUser = (): UserType | null => {
  const user = localStorage.getItem("token");
  return user ? JSON.parse(user) : null;
};

export default getUser;
