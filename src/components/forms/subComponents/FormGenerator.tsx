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
  withoutSubmit = false,
  submitButtonIcon = <AcceptIcon />,
  submitButtonLabel = "Send",
  submitButtonStyle = styles.submitButton,
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

  const formIsMessy = (formState: any) => {
    const issue = Object.keys(formState.error).findIndex(
      (field) => formState.error[field] !== ""
    );
    formState.messy = issue >= 0;
  };

  const checkSameFields = (formFields: any, formState: any) => {
    const sameFields = formFields
      .flat()
      .filter((field: any) => field?.validation?.sameAs);

    if (sameFields) {
      const errors = sameFields.some((field: any) => {
        if (
          formState.value[field.name] !==
          formState.value[field.validation.sameAs]
        ) {
          formState.error[field.name] = "Fields must be the same";
          return true;
        }
        return false;
      });
      console.log(errors);
      if (errors.length > 0) {
        formState.messy = true;
      }
    }
  };

  const getFormState = (formState: object, state: string) => {
    return Object.keys(formState[state as keyof object]).map(
      (field) => formState[state as keyof object][field]
    );
  };

  useEffect(() => {
    formIsMessy(formState);
    checkSameFields(formFields, formState);
    setFormData(formState);
  }, [
    ...getFormState(formState, "value"),
    ...getFormState(formState, "error"),
  ]);

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
      {!withoutSubmit && (
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
