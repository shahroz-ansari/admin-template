import { Stack } from '@mui/material';
import type { GridToolbarProps, ToolbarPropsOverrides } from '@mui/x-data-grid';
import { useContext } from 'react';
import { TableContext } from '../table.context';
import { HeaderComponent } from './header.component';
import { SelectionComponent } from './selection.component';

const TableToolbarComponent: React.FC<GridToolbarProps & ToolbarPropsOverrides> = () => {
  const { rowSelectionModel } = useContext(TableContext);

  return (
    <Stack>
      {rowSelectionModel?.length > 0 ? <SelectionComponent /> : <HeaderComponent />}
    </Stack>
  );
};

export default TableToolbarComponent;
