type FieldBaseConfig = {
  name: string;
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
