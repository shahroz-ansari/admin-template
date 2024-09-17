import { Stack } from '@mui/material';
import FormCheckboxField from '../../applications/form/inputs/checkbox-input.component';
import FormMultiSelectField from '../../applications/form/inputs/multi-select-input.component';
import FormSelectField from '../../applications/form/inputs/select-input.component';
import FormTextField from '../../applications/form/inputs/text-input.component';
import type { FormConfig } from '../../models/form.model';
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
