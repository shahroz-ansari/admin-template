import type { validations } from './validations.form';

export type FieldValue = string | boolean;
export type FormValues = { [key: string]: FieldValue };

type ValidationSchemaBase = {
  type: keyof typeof validations;
  message: string;
};

type RequiredValidation = ValidationSchemaBase;

export type ValidationSchemaType = Array<RequiredValidation>;

type ValidationsFunction = (
  value: FieldValue,
  options: {
    message: string;
    values: FormValues;
  },
) => Promise<string>;

export type ValidationFunctionsMap = { [key: string]: ValidationsFunction };

type FieldBaseConfig = {
  name: string;
  validate?: ValidationSchemaType;
  component: {
    key: string;
  };
};

export interface TextFieldConfig extends FieldBaseConfig {
  value: string;
  type: string;
  label: string;
}

export interface CheckboxFieldConfig extends FieldBaseConfig {
  value: boolean;
  label: string;
}

export interface SelectFieldConfig extends FieldBaseConfig {
  value: string | number;
  label: string;
  options: Array<{ value: number | string; label: string }>;
}

export type MultiSelectFieldOptionValueType = number | string;
export type MultiSelectFieldOptionType = {
  value: MultiSelectFieldOptionValueType;
  label: string;
};
export interface MultiSelectFieldConfig extends FieldBaseConfig {
  value: Array<string | number>;
  label: string;
  options: Array<MultiSelectFieldOptionType>;
}

/** Add new input type here */
export type FormFieldType =
  | TextFieldConfig
  | CheckboxFieldConfig
  | SelectFieldConfig
  | MultiSelectFieldConfig;

export interface FormConfig {
  name: string;
  properties: {
    [key: string]: FormFieldType;
  };
}
