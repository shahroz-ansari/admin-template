import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

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
