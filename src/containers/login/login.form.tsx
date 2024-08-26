import { Stack } from '@mui/material';
import type { FormConfig } from '../../models/form.model';
import FormCheckboxField from '../form/inputs/checkbox-input.container';
import FormMultiSelectField from '../form/inputs/multi-select-input.container';
import FormSelectField from '../form/inputs/select-input.container';
import FormTextField from '../form/inputs/text-input.container';
import type loginConfig from './login.config.json';

type LoginPropertiesType = typeof loginConfig.properties;

interface Props {
  config: FormConfig;
}
const LoginForm: React.FC<Props> = ({ config }) => {
  const fields = config.properties as LoginPropertiesType;
  return (
    <Stack gap={3}>
      <FormTextField field={fields.username} />
      <FormTextField field={fields.password} />
      <FormCheckboxField field={fields.keepLoggedIn} />
      <FormSelectField field={fields.gender} />
      <FormMultiSelectField field={fields.interest} />
    </Stack>
  );
};

export default LoginForm;
