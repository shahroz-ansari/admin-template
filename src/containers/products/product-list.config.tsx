import type { TableConfig } from '../../models/table.model';
import ActionColumnComponent from '../table/components/action-column.component';
const ProductListConfig: TableConfig = {
  name: {
    column: {
      field: 'name',
      headerName: 'Name',
      sortable: true,
      flex: 1,
    },
    filter: {
      options: [
        { label: 'Samsung', value: 's1' },
        { label: 'Airtel', value: 'a1' },
      ],
    },
  },
  image: {
    column: {
      field: 'image',
      headerName: 'Image',
      flex: 1,
    },
  },
  actions: {
    column: {
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      headerAlign: 'right',
      renderCell: ActionColumnComponent,
      sortable: false,
    },
  },
};

export default ProductListConfig;
