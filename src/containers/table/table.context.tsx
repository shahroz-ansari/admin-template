import { createContext } from 'react';
import type { TableContextValue } from '../../applications/table/table.model';

export const TableContext = createContext<TableContextValue>({
  rowSelectionModel: [],
  showSearch: false,
  filters: [],
  setKeyword: () => null,
  onFilterSubmit: () => null,
});
