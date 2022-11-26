import { inputFieldType } from "../../common/InputField";
import formFieldType from "../types/formFieldType";
import userName from "../validation/recipes/userName";
import password from "../validation/recipes/password";

const loginFormFields: formFieldType[] = [
  {
    type: inputFieldType.text,
    name: "username",
    label: "Username",
    validation: userName,
  },
  {
    type: inputFieldType.password,
    name: "password",
    label: "Password",
    validation: password,
  },
];

export default loginFormFields;
