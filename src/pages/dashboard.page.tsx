import { Button } from '@mui/material';
import { useEffect } from 'react';
import { loginAPI } from '../store/apis/login.api';
import { useAppDispatch, useAppSelector } from '../store/store.hook';

const Dashboard: React.FC = () => {
  const dispatch = useAppDispatch();
  const error = useAppSelector((state) => state.login.error);
  const data = useAppSelector((state) => state.login.data);
  const loading = useAppSelector((state) => state.login.loading);

  useEffect(() => {
    dispatch(loginAPI({ data: { username: '', password: '' } }));
  }, []);

  return (
    <>
      <Button variant="contained">Button</Button>
      <h1>Some text</h1>
      {JSON.stringify(data)} Dashboard {JSON.stringify(error)}
    </>
  );
};

export default Dashboard;
