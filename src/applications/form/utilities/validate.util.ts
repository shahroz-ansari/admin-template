import type { FieldValue, FormFieldType, FormValues } from '../../../models/form.model';
import { validations } from '../validations';

// TODO:: Fix type import from outside of form

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
