import { createContext } from 'react';
import type { TableContextValue } from '../../packages/table/table.model';

export const TableContext = createContext<TableContextValue>({
  rowSelectionModel: [],
  showSearch: false,
  filters: [],
  setKeyword: () => null,
  onFilterSubmit: () => null,
});
