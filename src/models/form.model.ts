import { validations } from '../containers/form/validations';

export type FieldValue = string;
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

export type FormFieldType = TextFieldConfig;

export interface FormConfig {
  name: string;
  properties: {
    [key: string]: FormFieldType;
  };
}
