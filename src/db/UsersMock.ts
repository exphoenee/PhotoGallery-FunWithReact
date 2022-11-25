import UserType from "./../types/UserType";

const UsersMock: UserType[] = [
  {
    id: "6021ded1-7f57-4910-b4f7-dbcfe3b25301",
    username: "admin",
    photo:
      "https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y",
    password: "admin",
    firstName: "Laslie",
    lastName: "Nimda",
    email: "admin@admin.com",
    role: "admin",
  },
  {
    id: "fa7be4d1-8d30-4287-b373-21b85b592dc2",
    username: "user",
    photo:
      "https://i.picsum.photos/id/1027/2848/4272.jpg?hmac=EAR-f6uEqI1iZJjB6-NzoZTnmaX0oI0th3z8Y78UpKM",
    password: "user",
    firstName: "Samantha",
    lastName: "Resu",
    email: "admin@admin.com",
    role: "user",
  },
];

export const unknownUser: UserType = {
  id: "unknown",
  photo:
    "https://upload.wikimedia.org/wikipedia/commons/a/ad/Placeholder_no_text.svg",
  lastName: "unknown",
  firstName: "unknown",
  email: "unknown",
  username: "unknown",
  password: "unknown",
  role: "user",
};

export default UsersMock;
