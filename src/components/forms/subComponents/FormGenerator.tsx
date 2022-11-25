import React, { useState, useEffect } from "react";

/* components */
import FormFieldRenderer from "./FormFieldRenderer";
import Button from "../../common/Button/Button";
import { AcceptIcon } from "../../icons";

/* styles */
import styles from "./FormGenerator.module.css";

/* types */
import formFieldType from "../types/formFieldType";

/* Constants */
import setterFuncNames from "../constants/setterFuncNames";

export interface FormGeneratorType {
  formFields: (formFieldType | formFieldType[])[];
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setFormData: (data: any) => void;
  withoutSubmit?: boolean;
  submitButtonIcon?: React.ReactNode;
  submitButtonLabel?: string;
  submitButtonStyle?: string;
  beforeFormFields?: React.ReactNode;
  afterFormFields?: React.ReactNode;
}

const FormGenerator: React.FC<FormGeneratorType> = ({
  handleSubmit,
  setFormData,
  formFields,
  withoutSubmit = true,
  submitButtonIcon = <AcceptIcon />,
  submitButtonLabel = "Send",
  submitButtonStyle = styles.singUpBtn,
  beforeFormFields,
  afterFormFields,
}) => {
  const initialState = formFields.flat().reduce(
    (acc, field) => {
      return {
        ...acc,
        value: {
          ...acc.value,
          [field.name]: field?.value ?? "",
        },
        touched: { ...acc.touched, [field.name as string]: false },
        error: { ...acc.error, [field.name as string]: "" },
      };
    },
    { messy: true, value: {}, touched: {}, error: {} }
  );

  const [formState, setFormState] = useState<any>(initialState);

  /* That must be placed in a useCallback because of performance */
  const fieldHandler = formFields.flat().reduce((acc, field) => {
    const createFunc = (type: string, value: any) => {
      setFormState((prevState: any) => {
        return {
          ...prevState,
          [type]: {
            ...prevState[type],
            [field.name]: value,
          },
        };
      });
    };

    return {
      ...acc,
      [field.name as string]: {
        ...setterFuncNames.reduce((acc, type) => {
          return {
            ...acc,
            [`set${type}`]: (value: any) =>
              createFunc(type.toLowerCase(), value),
          };
        }, {}),
      },
    };
  }, {});

  const validateForm = (formFields: any, formState: any, fieldHandler: any) => {
    const validationRules = formFields.reduce((acc: any, field: any) => {
      return {
        ...acc,
        [field.name as string]: {
          ...field.validation,
        },
      };
    }, {});

    const fieldNames = Object.keys(formState.value).map((input) => input);

    const results = fieldNames.map((field) => {
      const value = formState.value[field];
      const validation = validationRules[field];
      const touched = formState.touched[field];
      const error = formState.error[field];

      console.log({ field, value, validation, touched, error });

      if (!touched) return;

      if (validation.required && value.trim() === "") {
        fieldHandler[field].setError("Required");
        return;
      }

      if (validation.minLength && value.length < validation.minLength) {
        fieldHandler[field].setError(`Min length is ${validation.minLength}`);
        return;
      }

      if (validation.maxLength && value.length > validation.maxLength) {
        fieldHandler[field].setError(`Max length is ${validation.maxLength}`);
        return;
      }

      if (validation.isEmail && !value.includes("@")) {
        fieldHandler[field].setError("Invalid email");
        return;
      }

      if (validation.isNumeric && isNaN(Number(value))) {
        fieldHandler[field].setError("Invalid number");
        return;
      }

      fieldHandler[field].setError("");
    });
  };

  useEffect(() => {
    //validateForm(formFields, formState, fieldHandler);
    setFormData(formState);
  }, [...Object.keys(formState.value).map((value) => formState.value[value])]);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {beforeFormFields && beforeFormFields}
      <div className={styles.fieldContainer}>
        <FormFieldRenderer
          formFields={formFields}
          formState={formState}
          fieldHandler={fieldHandler}
        />
      </div>
      {afterFormFields && afterFormFields}
      {withoutSubmit && (
        <Button
          type="submit"
          className={submitButtonStyle}
          disabled={formState.messy}
          icon={submitButtonIcon as JSX.Element}
          label={submitButtonLabel}
        />
      )}
    </form>
  );
};
export default FormGenerator;
