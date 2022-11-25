import { inputFieldType } from "../../common/InputField";
import formFieldType from "../types/formFieldType";

const passwordChangeFormFields: formFieldType[] = [
  {
    type: inputFieldType.password,
    label: "Old password",
    name: "oldPassword",
    newPassword: true,
    validation: {
      required: true,
    },
  },
  {
    type: inputFieldType.password,
    label: "New password",
    name: "password",
    newPassword: true,
    validation: {
      required: true,
    },
  },
  {
    type: inputFieldType.password,
    label: "New password again",
    name: "passwordAgain",
    newPassword: true,
    validation: {
      required: true,
    },
  },
];

export default passwordChangeFormFields;
