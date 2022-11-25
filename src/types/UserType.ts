export default interface UserType {
  id: string;
  photo: string;
  lastName: string;
  firstName: string;
  email: string;
  username: string;
  password: string;
  role: "admin" | "user";
}
