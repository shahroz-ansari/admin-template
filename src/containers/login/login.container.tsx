import { Button, Stack } from '@mui/material';
import type { LoginPayloadType } from '../../models/auth.model';
import { loginAPI, loginAPIKey } from '../../store/apis/login.api';
import { useAppDispatch, useAppSelector } from '../../store/store.hook';
import FormProvider from '../form/form-provider.container';
import loginConfig from './login.config.json';
import LoginForm from './login.form';

const LoginContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const loginPending = useAppSelector((state) => state.api.pending[loginAPIKey]);
  const onLoginSubmit = (data: LoginPayloadType) => {
    dispatch(loginAPI(data));
  };

  return (
    <div>
      <h1>Login Container</h1>
      <FormProvider onSubmit={onLoginSubmit} config={loginConfig}>
        <Stack gap={3}>
          <LoginForm config={loginConfig} />
          <Button variant="contained" type="submit" disabled={loginPending}>
            Login
          </Button>
        </Stack>
      </FormProvider>
    </div>
  );
};

export default LoginContainer;
