import React, { useState, useEffect } from "react";
import Button from "../Button";
import { HideIcon, ShowIcon } from "../../icons";

/* Components */
import InputError from "../Popup/Popup";

/* styles */
import styles from "./InputField.module.css";

/* types */
import validationRuleType from "../../forms/types/validationRuleType";

/* helpers */
import fieldValidation from "../../forms/validation/fieldValidation";

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

  const inputValidation = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: inputFieldType,
    validation?: validationRuleType
  ) => {
    const issue = fieldValidation(e, type, validation);
    setError(issue ?? "");
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
