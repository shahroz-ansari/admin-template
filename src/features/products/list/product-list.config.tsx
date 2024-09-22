import ActionColumnComponent from '../../../packages/table/components/action-column.component';
import type { TableConfig } from '../../../packages/table/table.model';
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
