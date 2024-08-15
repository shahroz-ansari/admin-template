import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import { validations } from '../containers/form/validations';
import { FieldValue, FormFieldType, FormValues } from '../models/form.model';

export function parseFieldError(
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>,
) {
  if (typeof error === 'string') {
    return error;
  } else if (typeof error?.message === 'string') {
    return error.message as string; // Assuming FieldError has a message property
  }
  return '';
}

export async function executeValidations(
  fieldProps: FormFieldType,
  value: FieldValue,
  values: FormValues,
) {
  const validateSchema = fieldProps.validate!;
  for (let i = 0; i < validateSchema.length; i++) {
    const validate = validateSchema[i];
    const message = await validations[validate.type](value, {
      message: validate.message,
      values,
    });
    if (message) return message;
  }
  return true;
}
