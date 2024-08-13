import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { TextFieldConfig } from '../../../models/form.model';
import { parseFieldError } from '../../../utils/form.util';

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
