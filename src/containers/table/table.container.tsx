import { Box } from '@mui/material';
import type {
  GridRowId,
  GridRowSelectionModel,
  GridRowsProp,
  GridSortModel,
} from '@mui/x-data-grid';
import { DataGrid } from '@mui/x-data-grid';
import { useCallback, useEffect, useMemo, useState } from 'react';
import type {
  ApiAction,
  FilterData,
  RowAction,
  TableConfig,
  TableContextValue,
} from '../../applications/table/table.model';
import type { APIPagination } from '../api/api.model';
import TablePaginationComponent from './components/pagination.component';
import TableToolbarComponent from './components/toolbar.component';
import { TableContext } from './table.context';

interface Props<T extends GridRowsProp> {
  loading?: boolean;
  apiAction: ApiAction;
  rowAction?: RowAction;
  rows: {
    data: T;
    pagination?: APIPagination;
  };
  showSearch?: boolean;
  config: TableConfig;
  preSelect?: GridRowId[];
}

const PageLimit = 10;

const TableContainer = <T extends GridRowsProp>({
  loading,
  apiAction,
  rowAction,
  rows,
  config,
  showSearch,
  preSelect,
}: Props<T>): JSX.Element => {
  const [keyword, setKeyword] = useState('');

  const [paginationModel, setPaginationModel] = useState({
    pageSize: PageLimit,
    page: 0,
  });

  const [sortModel, setSortModel] = useState<GridSortModel>([]);
  const handleColumnSort = useCallback((e: GridSortModel) => {
    setPaginationModel((p) => ({ ...p, page: 0 }));
    setSortModel(e);
  }, []);

  const [rowSelectionModel, setRowSelectionModel] = useState<GridRowSelectionModel>([]);
  useEffect(() => {
    if (preSelect) {
      setRowSelectionModel(preSelect);
    }
  }, [preSelect]);

  const [filterData, setFilterData] = useState<FilterData>({});
  const onFilterSubmit = useCallback((filters: FilterData) => {
    setFilterData(filters);
  }, []);

  useEffect(() => {
    const sortParams = sortModel.length
      ? { sortBy: sortModel[0].field || '', sortOrder: sortModel[0].sort || '' }
      : {};
    apiAction({
      params: {
        page: paginationModel.page + 1,
        limit: paginationModel.pageSize,
        ...(keyword ? { keyword } : {}),
        ...sortParams,
        filters: encodeURIComponent(JSON.stringify(filterData)),
      },
    });
  }, [apiAction, keyword, paginationModel, sortModel, filterData]);

  const filters = useMemo(() => {
    return Object.values(config)
      .filter((column) => column.filter)
      .map((column) => ({
        name: column.column.field,
        label: column.column.headerName || '',
        options: column.filter?.options || [],
      }));
  }, [config]);

  const columns = useMemo(() => {
    return Object.values(config).map((column) => column.column);
  }, [config]);

  const contextValue: TableContextValue = useMemo(() => {
    return {
      rowSelectionModel,
      showSearch: Boolean(showSearch),
      filters: filters,
      setKeyword: setKeyword,
      onFilterSubmit: onFilterSubmit,
      rowAction: rowAction,
    };
  }, [filters, onFilterSubmit, rowAction, rowSelectionModel, showSearch]);

  return (
    <TableContext.Provider value={contextValue}>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          loading={Boolean(loading)}
          rows={rows.data}
          columns={columns}
          /** Styling */
          sx={{
            border: 0,
            backgroundColor: '#fff',
            '& .MuiDataGrid-columnHeaders': {
              color: 'primary.main',
            },
          }}
          /** UI Customizations */
          slots={{
            pagination: TablePaginationComponent,
            toolbar: TableToolbarComponent,
          }}
          /** Row selections */
          checkboxSelection
          onRowSelectionModelChange={setRowSelectionModel}
          rowSelectionModel={rowSelectionModel}
          disableRowSelectionOnClick
          /** Pagination */
          paginationMode="server"
          rowCount={rows.pagination?.total || 0}
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          /** Column Sorting */
          sortingMode="server"
          sortModel={sortModel}
          onSortModelChange={handleColumnSort}
          disableColumnFilter
          disableColumnMenu
          hideFooterSelectedRowCount
        />
      </Box>
    </TableContext.Provider>
  );
};

export default TableContainer;
