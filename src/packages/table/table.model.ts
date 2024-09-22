import type {
  GridColDef,
  GridRowId,
  GridRowSelectionModel,
  GridValidRowModel,
} from '@mui/x-data-grid';

export enum RowActionType {
  Edit,
  Delete,
}

export interface TableQueryParams {
  params: {
    page?: number;
    limit?: number;
    keyword?: string;
    sortBy?: string;
    sortOrder?: string;
    filters?: string;
  };
}

export type TableFilterOptions = { value: number | string; label: string }[];

export type TableColumnFilterConfig = {
  range?: boolean;
  type?: 'select' | 'date';
  options?: TableFilterOptions;
};

export type TableColumnConfig = {
  column: GridColDef<GridValidRowModel>;
  filter?: TableColumnFilterConfig;
};

export type TableConfig = {
  [key: string]: TableColumnConfig;
};

export interface TableFilterMap {
  name: string;
  label: string;
  options: TableFilterOptions;
}
export interface FilterData {
  [name: string]: string | number;
}
export interface TableContextValue {
  rowSelectionModel: GridRowSelectionModel;
  showSearch: boolean;
  filters: TableFilterMap[];
  setKeyword: (keyword: string) => void;
  onFilterSubmit: (filterData: FilterData) => void;
  rowAction?: RowAction;
}

export type ApiAction = (data: TableQueryParams) => void;
export type RowAction = (rowActionType: RowActionType, rowId: GridRowId) => void;