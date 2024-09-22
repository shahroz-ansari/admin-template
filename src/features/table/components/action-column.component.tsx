import { Delete, Edit } from '@mui/icons-material';
import { IconButton, Stack } from '@mui/material';
import type { GridRenderCellParams } from '@mui/x-data-grid';
import { useContext } from 'react';
import { RowActionType } from '../../../packages/table/table.model';
import { TableContext } from '../table.context';

const ActionColumnComponent: React.FC<GridRenderCellParams> = ({ id }) => {
  const { rowAction } = useContext(TableContext);
  const onEdit = () => {
    rowAction?.(RowActionType.Edit, id);
  };
  const onDelete = () => {
    rowAction?.(RowActionType.Delete, id);
  };
  return (
    <Stack direction="row" justifyContent="end" alignContent="flex-end">
      <IconButton onClick={onEdit}>
        <Edit color="primary" />
      </IconButton>
      <IconButton onClick={onDelete}>
        <Delete color="error" />
      </IconButton>
    </Stack>
  );
};

export default ActionColumnComponent;
