import { Box, Stack } from '@mui/material';
import { useContext } from 'react';
import { TableContext } from '../table.context';
import TableFilterComponent from './filter.component';
import { SearchComponent } from './search.component';

export const HeaderComponent = () => {
  const { showSearch, filters } = useContext(TableContext);

  return (
    <Stack sx={{ p: 2 }} justifyContent="space-between" direction="row">
      {showSearch ? <SearchComponent /> : <Box />}
      <Stack direction="row" gap={2}>
        {filters.length > 0 && <TableFilterComponent />}
      </Stack>
    </Stack>
  );
};
