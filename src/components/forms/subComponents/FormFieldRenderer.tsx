import React from "react";
import CheckBox, { checkBoxType } from "../../common/Checkbox/CheckBox";
import InputField, { inputFieldType } from "../../common/InputField";
import formFieldType from "../types/formFieldType";

interface FormFieldRendererType {
  formFields: (formFieldType | formFieldType[])[];
  formState: any;
  fieldHandler: any;
  group?: number;
}

const FormFieldRenderer: React.FC<FormFieldRendererType> = ({
  formFields,
  formState,
  fieldHandler,
  group,
}) => {
  return (
    <>
      {formFields?.map((input: formFieldType | formFieldType[], index) => {
        if (Array.isArray(input)) {
          return (
            <div className={`fiedlGroup-${index}`} key={`fiedlGroup-${index}`}>
              <FormFieldRenderer
                formFields={input}
                formState={formState}
                fieldHandler={fieldHandler}
                group={index}
              />
            </div>
          );
        } else {
          const props = {
            ...input,
            ...fieldHandler[input.name],
            key: `${input.name}${group ? `-${group}` : ""}-${index}`,
            id: `${input.name}${group ? `-${group}` : ""}-${index}`,
            value: formState.value[input.name],
            error: formState.error[input.name],
            showHideButton: input.type === inputFieldType.password,
          };

          return <InputField {...props} />;
        }
      })}
    </>
  );
};
export default FormFieldRenderer;
