import { Delete, Edit } from '@mui/icons-material';
import { IconButton, Stack } from '@mui/material';
import type { GridRenderCellParams } from '@mui/x-data-grid';
import { useContext } from 'react';
import { RowActionType } from '../../../packages/table/table.model';
import { TableContext } from '../table.context';

interface Props {
  cell: GridRenderCellParams;
  custom: unknown;
}

const ActionColumnComponent: React.FC<Props> = ({ cell: { id }, custom }) => {
  const { rowAction } = useContext(TableContext);
  const onEdit = () => {
    rowAction?.(RowActionType.Edit, id);
  };
  const onDelete = () => {
    rowAction?.(RowActionType.Delete, id);
  };

  const customProps = custom as {
    edit: boolean;
    delete: boolean;
  };

  return (
    <Stack direction="row" justifyContent="end" alignContent="flex-end">
      {customProps.edit && (
        <IconButton onClick={onEdit}>
          <Edit color="primary" />
        </IconButton>
      )}
      {customProps.delete && (
        <IconButton onClick={onDelete}>
          <Delete color="error" />
        </IconButton>
      )}
    </Stack>
  );
};

export default ActionColumnComponent;
