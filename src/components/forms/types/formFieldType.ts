import { checkBoxType } from "../../common/Checkbox/CheckBox";
import { inputFieldType } from "../../common/InputField";
import validationRuleType from "./validationRuleType";

interface formFieldType {
  type: inputFieldType | checkBoxType | "textArea";
  label?: string;
  name: string;
  disabled?: boolean;
  id?: string;
  newPassword?: boolean;
  value?: string;
  rows?: number;
  cols?: number;
  className?: string;
  icon?: JSX.Element;
  validation?: validationRuleType;
}
export default formFieldType;
