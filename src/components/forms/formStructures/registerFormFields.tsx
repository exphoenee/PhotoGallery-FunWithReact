/* Components */
import { PasswordIcon, UserIcon } from "../../icons";

/* types */
import { inputFieldType } from "../../common/InputField";
import { checkBoxType } from "../../common/Checkbox/CheckBox";
import formFieldType from "../types/formFieldType";

const registerFormFields: (formFieldType | formFieldType[])[] = [
  {
    type: inputFieldType.text,
    label: "Username",
    name: "username",
    icon: <UserIcon />,
    validation: {
      required: true,
      minLength: 3,
      maxLength: 20,
    },
  },
  {
    type: inputFieldType.password,
    label: "Password",
    name: "password",
    icon: <PasswordIcon />,
    validation: {
      required: true,
      sameAs: "passwordAgain",
    },
  },
  {
    type: inputFieldType.password,
    label: "Password again",
    name: "passwordAgain",
    icon: <PasswordIcon />,
    validation: {
      required: true,
    },
  },
  {
    type: checkBoxType.checkbox,
    label: "I accept the terms and conditions",
    name: "terms",
    validation: {
      required: true,
    },
  },
];

export default registerFormFields;
