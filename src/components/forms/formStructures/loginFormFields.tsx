import { inputFieldType } from "../../common/InputField";
import formFieldType from "../types/formFieldType";

const loginFormFields: formFieldType[] = [
  {
    type: inputFieldType.text,
    name: "username",
    label: "Username",
    validation: {
      required: true,
    },
  },
  {
    type: inputFieldType.password,
    name: "password",
    label: "Password",
    validation: {
      required: true,
    },
  },
];

export default loginFormFields;
