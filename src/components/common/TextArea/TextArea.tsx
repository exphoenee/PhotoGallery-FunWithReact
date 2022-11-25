import React from "react";

/* Styles */
import styles from "./TextArea.module.css";
import InputError from "../Popup";

export interface TextAreaProps {
  label?: string;
  placeholder?: string;
  content?: string;
  setContent: (value: string) => void;
  rows?: number;
  cols?: number;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  errorTimeout?: number;
  setError: (error: string | null | undefined) => void;
  name?: string;
  id?: string;
  className?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  placeholder,
  content,
  setContent,
  rows,
  cols,
  disabled,
  required,
  error,
  errorTimeout = 5000,
  setError,
  name,
  id,
  className,
}: any) => {
  return (
    <div className={styles.textAreaContainer}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <textarea
        name={name ?? id}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        cols={cols}
        rows={rows}
        required={required}
        value={content}
        className={`${className} ${styles.textArea}`}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <InputError
        error={error}
        setError={setError}
        errorTimeout={errorTimeout}
      />
    </div>
  );
};

export default TextArea;
