import type { GridRenderCellParams, GridValidRowModel } from '@mui/x-data-grid';

export type CellRenderParams = GridRenderCellParams;

export type ColumnConfig = {
  name: string;
  sortable?: boolean;
  title: string;
  render?: (params: CellRenderParams) => React.ReactNode;
  filter?: {
    options: { label: string; value: string }[];
  };
};

// not used as of now
export type CellDataType = {
  config: ColumnConfig;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  row: GridValidRowModel;
};

export type TableConfig = {
  [key: string]: ColumnConfig;
};
