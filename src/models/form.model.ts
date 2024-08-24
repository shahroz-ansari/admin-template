import type { validations } from '../containers/form/validations';

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

/** Add new input type here */
export type FormFieldType = TextFieldConfig | CheckboxFieldConfig;

export interface FormConfig {
  name: string;
  properties: {
    [key: string]: FormFieldType;
  };
}
