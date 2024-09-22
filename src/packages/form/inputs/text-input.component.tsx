import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import type { TextFieldConfig } from '../form.model';
import { parseFieldError } from './../utilities/rhf-error-parser.util';
import { executeValidations } from './../utilities/validate.util';

interface Props {
  field: TextFieldConfig;
}

const FormTextField: React.FC<Props> = ({ field: fieldProps }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Controller
      name={fieldProps.name}
      control={control}
      defaultValue={fieldProps.value}
      {...(fieldProps.validate
        ? {
            rules: {
              validate: (value, values) => executeValidations(fieldProps, value, values),
            },
          }
        : null)}
      render={({ field }) => (
        <TextField
          {...field}
          label={fieldProps.label}
          type={fieldProps.type}
          error={Boolean(errors[fieldProps.name])}
          helperText={parseFieldError(errors[fieldProps.name])}
        />
      )}
    />
  );
};

export default FormTextField;
