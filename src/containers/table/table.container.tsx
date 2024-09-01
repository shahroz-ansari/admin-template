import { Box } from '@mui/material';
import type {
  GridRowSelectionModel,
  GridRowsProp,
  GridSortModel,
} from '@mui/x-data-grid';
import { DataGrid } from '@mui/x-data-grid';
import { useCallback, useEffect, useMemo, useState } from 'react';
import type { APIPagination } from '../../models/api.model';
import type { TableConfig } from '../../models/table.model';
import TablePaginationComponent from './components/pagination.component';
import TableToolbarComponent from './components/toolbar.component';

interface TableQueryParams {
  params: {
    page?: number;
    limit?: number;
    keyword?: string;
    sortBy?: string;
    sortOrder?: string;
    filters?: string;
  };
}

interface Props<T extends GridRowsProp> {
  loading?: boolean;
  action: (data: TableQueryParams) => void;
  data: {
    data: T;
    pagination?: APIPagination;
  };
  config: TableConfig;
  search?: boolean;
}

const PageLimit = 10;

const TableContainer = <T extends GridRowsProp>({
  loading,
  action,
  data,
  config,
  search,
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

  const [filterData, setFilterData] = useState<{ [name: string]: string }>({});
  const onFilterSubmit = useCallback((filters: { [name: string]: string }) => {
    setFilterData(filters);
  }, []);

  useEffect(() => {
    const sortParams = sortModel.length
      ? { sortBy: sortModel[0].field || '', sortOrder: sortModel[0].sort || '' }
      : {};
    action({
      params: {
        page: paginationModel.page + 1,
        limit: paginationModel.pageSize,
        ...(keyword ? { keyword } : {}),
        ...sortParams,
        filters: encodeURIComponent(JSON.stringify(filterData)),
      },
    });
  }, [action, keyword, paginationModel, sortModel, filterData]);

  const columns = useMemo(() => {
    return Object.values(config).map((column) => ({
      field: column.name,
      headerName: column.title,
      sortable: column.sortable || false,
    }));
  }, [config]);

  const filters = useMemo(() => {
    return Object.values(config)
      .filter((col) => col.filter)
      .map((column) => ({
        name: column.name,
        label: column.title,
        options: column.filter?.options || [],
      }));
  }, [config]);

  const Toolbar = useCallback(() => {
    return (
      <TableToolbarComponent
        search={Boolean(search)}
        filters={filters}
        rowSelectionModel={rowSelectionModel}
        onSearchSubmit={(keyword: string) => setKeyword(keyword)}
        onFilterSubmit={onFilterSubmit}
      />
    );
  }, [filters, onFilterSubmit, rowSelectionModel, search]);

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        loading={Boolean(loading)}
        rows={data.data}
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
          toolbar: Toolbar,
        }}
        /** Row selections */
        checkboxSelection
        onRowSelectionModelChange={setRowSelectionModel}
        rowSelectionModel={rowSelectionModel}
        disableRowSelectionOnClick
        /** Pagination */
        paginationMode="server"
        rowCount={data.pagination?.total || 0}
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
  );
};

export default TableContainer;
