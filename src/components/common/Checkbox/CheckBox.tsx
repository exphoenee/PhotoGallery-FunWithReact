import React from "react";

/* Components */
import InputError from "../Popup/Popup";

/* styles */
import styles from "./CheckBox.module.css";

/* types */
import validationRuleType from "../../forms/types/validationRuleType";

export enum checkBoxType {
  checkbox = "checkbox",
}

export interface CheckBoxProps {
  label: string;
  name: string;
  error?: null | string;
  errorTimeout?: number;
  setError: (error: string | null | undefined) => void;
  validation?: validationRuleType;
  value: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  label,
  name,
  value,
  error,
  errorTimeout = 5000,
  setError,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => onChange(e);
  return (
    <div className={styles.container}>
      <input
        className={styles.checkmark}
        type="checkbox"
        name={name}
        id={name}
        checked={value}
        onChange={handleChange}
      />
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <InputError
        error={error}
        setError={setError}
        errorTimeout={errorTimeout}
      />
    </div>
  );
};

export default CheckBox;
