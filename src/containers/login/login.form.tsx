import { Stack } from '@mui/material';
import { FormConfig } from '../../models/form.model';
import FormTextField from '../form/inputs/text-input.container';

interface Props {
  config: FormConfig;
}
const LoginForm: React.FC<Props> = ({ config }) => {
  const fields = config.properties;
  return (
    <Stack gap={3}>
      <FormTextField field={fields.username} />
      <FormTextField field={fields.password} />
    </Stack>
  );
};

export default LoginForm;
