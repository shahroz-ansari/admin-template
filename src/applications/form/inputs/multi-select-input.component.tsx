import { Checkbox, ListItemText, MenuItem, TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import type {
  MultiSelectFieldConfig,
  MultiSelectFieldOptionValueType,
} from '../../../models/form.model';
import { parseFieldError } from './../utilities/rhf-error-parser.util';
import { executeValidations } from './../utilities/validate.util';

interface Props {
  field: MultiSelectFieldConfig;
}

const FormMultiSelectField: React.FC<Props> = ({ field: fieldProps }) => {
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
          value={field.value || []}
          label={fieldProps.label}
          select
          SelectProps={{
            multiple: true,
            renderValue: (selected) =>
              fieldProps.options
                .map((option) =>
                  (selected as MultiSelectFieldOptionValueType[])?.includes(option.value)
                    ? option.label
                    : '',
                )
                .filter((label) => label)
                .join(', '),
          }}
          error={Boolean(errors[fieldProps.name])}
          helperText={parseFieldError(errors[fieldProps.name])}
        >
          {fieldProps.options.map((option) => (
            <MenuItem value={option.value} key={option.value}>
              <Checkbox checked={field.value?.indexOf(option.value) > -1} />
              <ListItemText primary={option.label} />
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
};

export default FormMultiSelectField;
