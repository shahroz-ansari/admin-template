import { Stack } from '@mui/material';
import { FormComponent } from '../../applications/form/component.form';
import type { FormConfig } from '../../applications/form/form.model';
import type loginConfig from './login.config.json';

type LoginPropertiesType = typeof loginConfig.properties;

interface Props {
  config: FormConfig;
}
const LoginForm: React.FC<Props> = ({ config }) => {
  const fields = config.properties as LoginPropertiesType;
  return (
    <Stack gap={3}>
      <FormComponent field={fields.username} />
      <FormComponent field={fields.password} />
      <FormComponent field={fields.keepLoggedIn} />
      <FormComponent field={fields.gender} />
      <FormComponent field={fields.interest} />
    </Stack>
  );
};

export default LoginForm;
