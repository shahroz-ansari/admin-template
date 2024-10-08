import { Button, Stack } from '@mui/material';
import FormInitializer from '../../../packages/form/initializer.form';
import { useAppDispatch, useAppSelector } from '../../../store/store.hook';
import type { LoginPayloadType } from '../auth.model';
import { loginAPI, loginAPIKey } from './api/login.api';
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
      <FormInitializer onSubmit={onLoginSubmit}>
        <Stack gap={3}>
          <LoginForm config={loginConfig} />
          <Button variant="contained" type="submit" disabled={loginPending}>
            Login
          </Button>
        </Stack>
      </FormInitializer>
    </div>
  );
};

export default LoginContainer;
