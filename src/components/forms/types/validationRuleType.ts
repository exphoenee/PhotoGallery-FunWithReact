interface validationRuleType {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  isEmail?: boolean;
  isPhone?: boolean;
  isPassword?: boolean;
  sameAs?: string;
  isNumeric?: boolean;
  pattern?: RegExp;
  custom?: Function;
}

export default validationRuleType;
