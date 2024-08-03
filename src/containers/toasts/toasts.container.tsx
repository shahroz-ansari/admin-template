import { Button, colors } from '@mui/material';
import { SnackbarProvider, closeSnackbar, enqueueSnackbar } from 'notistack';
import { useEffect } from 'react';
import { useAppSelector } from '../../store/store.hook';

const ToastContainer: React.FC = () => {
  const data = useAppSelector((state) => state.toast.data);
  console.log('okok 3', data);
  useEffect(() => {
    if (data) {
      enqueueSnackbar(data.message, {
        variant: data.variant,
        action: (id) => (
          <Button sx={{ color: colors.grey[100] }} onClick={() => closeSnackbar(id)}>
            Dismiss
          </Button>
        ),
      });
    }
  }, [data]);

  return <SnackbarProvider />;
};

export default ToastContainer;
