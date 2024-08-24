import { Checkbox, FormControl, FormControlLabel, FormHelperText } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import type { CheckboxFieldConfig } from '../../../models/form.model';
import { executeValidations, parseFieldError } from '../../../utils/form.util';

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
                checked={field.value}
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
