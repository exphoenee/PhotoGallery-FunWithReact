import React, { useState, useEffect } from "react";
import Button from "../Button";
import { HideIcon, ShowIcon } from "../../icons";

/* Components */
import InputError from "../Popup/Popup";

/* styles */
import styles from "./InputField.module.css";

/* types */
import validationRuleType from "../../forms/types/validationRuleType";

export enum inputFieldType {
  text = "text",
  email = "email",
  password = "password",
  checkbox = "checkbox",
  hidden = "hidden",
}

export interface InputFieldProps {
  label?: string;
  name?: string;
  type?: inputFieldType;
  id?: string;
  value: string;
  icon?: JSX.Element;
  showHideButton?: boolean;
  autocomplete?: boolean;
  newPassword?: boolean;
  disabled?: boolean;
  required?: boolean;
  validation?: validationRuleType;
  error?: string;
  errorTimeout?: number;
  setValue: (value: any) => void;
  setTouched: (touched: boolean) => void;
  setError: (error: string | null | undefined) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  id,
  type = inputFieldType.text,
  value,
  icon,
  showHideButton = false,
  autocomplete = false,
  newPassword = false,
  validation,
  disabled,
  required,
  error,
  errorTimeout,
  setError,
  setValue,
  setTouched,
}) => {
  const [show, setShow] = useState(false);

  const validate = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: inputFieldType,
    validation?: validationRuleType
  ) => {
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
        if (type === inputFieldType.checkbox && checked === false) {
          return "Required";
        } else if (value.length === 0) {
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

      if (
        isPassword &&
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i.test(value)
      ) {
        return "";
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
  };

  const inputValidation = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: inputFieldType,
    validation?: validationRuleType
  ) => {
    const issue = validate(e, type, validation);
    setError(issue);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTouched(true);
    setValue(e.target.value);
  };

  //TODO: defining the correct type, but how {[index typeof inputFieldType]: sting}
  const styleing: any = {
    [inputFieldType.checkbox]: styles.checkfield,
  };

  return (
    <div className={styles.inputField}>
      <div className={styleing[type as inputFieldType] || styles.field}>
        {label && (
          <label className={styles.label} htmlFor={id}>
            {label}
          </label>
        )}
        {icon && <div className={styles.icon}>{icon}</div>}
        {showHideButton && (
          <Button
            className={styles.showHideButton}
            icon={show ? <HideIcon /> : <ShowIcon />}
            onClick={() => setShow(!show)}
            tabIndex={-1}
            circular
            noBackground
          />
        )}
        <input
          className={
            icon
              ? showHideButton
                ? styles.inputWithIconAndShowHideButton
                : styles.inputWithIcon
              : styles.input
          }
          type={!showHideButton ? type : show ? "text" : "password"}
          name={name}
          id={id || name}
          disabled={disabled}
          required={required}
          autoComplete={
            newPassword ? "newPassword" : autocomplete ? "on" : "off"
          }
          value={value}
          onChange={handleChange}
          onBlur={(e) => inputValidation(e, type, validation)}
          onFocus={() => setError("")}
        />
      </div>
      <InputError
        error={error}
        setError={setError}
        errorTimeout={errorTimeout}
      />
    </div>
  );
};

export default InputField;
