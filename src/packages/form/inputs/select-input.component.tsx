import { MenuItem, TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import type { SelectFieldConfig } from '../form.model';
import { parseFieldError } from './../utilities/rhf-error-parser.util';
import { executeValidations } from './../utilities/validate.util';

interface Props {
  field: SelectFieldConfig;
}

const FormSelectField: React.FC<Props> = ({ field: fieldProps }) => {
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
          select
          error={Boolean(errors[fieldProps.name])}
          helperText={parseFieldError(errors[fieldProps.name])}
        >
          <MenuItem value={''}>
            <em>None</em>
          </MenuItem>
          {fieldProps.options.map((option) => (
            <MenuItem value={option.value} key={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
};

export default FormSelectField;
