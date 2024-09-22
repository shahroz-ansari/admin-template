import { Checkbox, FormControl, FormControlLabel, FormHelperText } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import type { CheckboxFieldConfig } from '../form.model';
import { parseFieldError } from './../utilities/rhf-error-parser.util';
import { executeValidations } from './../utilities/validate.util';

interface Props {
  field: CheckboxFieldConfig;
}

const FormCheckboxField: React.FC<Props> = ({ field: fieldProps }) => {
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
        <FormControl required error={Boolean(errors[fieldProps.name])} component="div">
          <FormControlLabel
            control={
              <Checkbox
                {...field}
                checked={Boolean(field.value)}
                onChange={(e) => field.onChange(e.target.checked)}
              />
            }
            label={fieldProps.label}
          />
          {Boolean(errors[fieldProps.name]) && (
            <FormHelperText>{parseFieldError(errors[fieldProps.name])}</FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
};

export default FormCheckboxField;
