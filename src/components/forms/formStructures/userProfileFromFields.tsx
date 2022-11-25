import { EmailIcon, NameIcon, UserIcon } from "../../icons";

import formFieldType from "../types/formFieldType";
import { inputFieldType } from "../../common/InputField";

const userProfileFromFields: formFieldType[] = [
  {
    label: "First name",
    name: "firstname",
    type: inputFieldType.text,
    icon: <NameIcon />,
  },
  {
    label: "Last name",
    name: "lastname",
    type: inputFieldType.text,
    icon: <NameIcon />,
    validation: {
      required: true,
      minLength: 3,
    },
  },
  {
    label: "Username",
    name: "username",
    type: inputFieldType.text,
    icon: <UserIcon />,
    validation: {
      required: true,
      minLength: 3,
    },
  },
  {
    label: "Email",
    name: "email",
    type: inputFieldType.email,
    icon: <EmailIcon />,
    validation: {
      required: true,
      isEmail: true,
    },
  },
  {
    label: "Role",
    name: "role",
    type: inputFieldType.text,
    disabled: true,
  },
];

export default userProfileFromFields;
