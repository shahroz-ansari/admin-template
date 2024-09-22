import { Stack, Typography } from '@mui/material';
import { useContext } from 'react';
import { TableContext } from '../table.context';
export const SelectionComponent = () => {
  const { rowSelectionModel } = useContext(TableContext);

  return (
    <Stack sx={{ p: 2 }} justifyContent="space-between" direction="row">
      <Typography>{rowSelectionModel.length} rows selected</Typography>
    </Stack>
  );
};
