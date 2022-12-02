import { inputFieldType } from "../../common/InputField";
import validationRuleType from "../types/validationRuleType";

export default function fieldValidation(
  e: React.ChangeEvent<HTMLInputElement>,
  type: inputFieldType,
  validation?: validationRuleType
): string {
  const { value, checked } = e.target;

  if (validation) {
    const {
      required,
      minLength,
      maxLength,
      isEmail,
      isPhone,
      isNumeric,
      isPassword,
      pattern,
      custom,
    } = {
      ...validation,
      isPassword:
        type === inputFieldType.password ? true : validation.isPassword,
    };

    if (required)
      if (inputFieldType.checkbox && checked === false) {
        return "Required";
      } else if (value.trim() === "") {
        return "Required";
      }

    if (minLength && value.length < minLength) {
      return `Min length is ${minLength}`;
    }

    if (maxLength && value.length > maxLength) {
      return `Max length is ${maxLength}`;
    }

    if (isEmail && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      return "Invalid email";
    }

    if (isPhone && !/^[0-9]{10}$/i.test(value)) {
      return "Invalid phone number";
    }

    // strong password validation

    if (
      isPassword &&
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i.test(value)
    ) {
      return "Password must contain at least 8 characters, one uppercase letter, one lowercase letter and one number";
    }

    if (isNumeric && !/^[0-9]+$/i.test(value)) {
      return "Invalid number";
    }

    if (pattern && !pattern.test(value)) {
      return "Invalid input";
    }

    if (custom && !custom(value)) {
      return "Invalid input";
    }
  }
  return "";
}
