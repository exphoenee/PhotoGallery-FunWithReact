import { EmailIcon, NameIcon, UserIcon } from "../../icons";

import getUser from "../../../hooks/useUser";

import formFieldType from "../types/formFieldType";
import { inputFieldType } from "../../common/InputField";

const user = getUser();

const userProfileFromFields: (formFieldType | formFieldType[])[] = [
  [
    {
      label: "First name",
      name: "firstName",
      value: user?.firstName,
      type: inputFieldType.text,
      icon: <NameIcon />,
    },
    {
      label: "Last name",
      name: "lastName",
      value: user?.lastName,
      type: inputFieldType.text,
      icon: <NameIcon />,
      validation: {
        required: true,
        minLength: 3,
      },
    },
  ],
  {
    label: "Username",
    name: "username",
    value: user?.username,
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
    value: user?.email,
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
    value: user?.role,
    type: inputFieldType.text,
    disabled: true,
  },
];

export default userProfileFromFields;
