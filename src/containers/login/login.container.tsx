import { Button } from '@mui/material';
import { loginAPI, loginAPIKey } from '../../store/apis/login.api';
import { useAppDispatch, useAppSelector } from '../../store/store.hook';

const LoginContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.toast.data);
  const loginPending = useAppSelector((state) => state.api.pending[loginAPIKey]);
  console.log(data);
  const onLogin = () => dispatch(loginAPI({ username: '', password: '' }));

  return (
    <div>
      <h1>Login Container</h1>
      <Button variant="contained" onClick={onLogin} disabled={loginPending}>
        Login
      </Button>
    </div>
  );
};

export default LoginContainer;
