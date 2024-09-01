import SendIcon from '@mui/icons-material/Send';
import {
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import type { GridRowSelectionModel } from '@mui/x-data-grid';
import type { ChangeEvent, KeyboardEvent } from 'react';
import { useState } from 'react';
import TableFilterComponent from './filter.component';

interface Props {
  search: boolean;
  onSearchSubmit: (keyword: string) => void;
  rowSelectionModel: GridRowSelectionModel;
  filters?: {
    label: string;
    name: string;
    options: { label: string; value: string }[];
  }[];
  onFilterSubmit?: (filters: { [name: string]: string }) => void;
}

const TableToolbarComponent: React.FC<Props> = ({
  rowSelectionModel,
  onSearchSubmit,
  filters,
  onFilterSubmit,
}) => {
  const [search, setSearch] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const handleSeachChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  const submitSearch = () => {
    if (search) {
      onSearchSubmit?.(search);
      setSubmitted(true);
    }
  };
  const clearSearch = () => {
    onSearchSubmit?.('');
    setSearch('');
    setSubmitted(false);
  };
  const handleKeySubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      submitSearch();
    }
  };

  return (
    <Stack>
      {rowSelectionModel.length > 0 ? (
        <Stack sx={{ p: 2 }} justifyContent="space-between" direction="row">
          <Typography>{rowSelectionModel.length} rows selected</Typography>
        </Stack>
      ) : (
        <Stack sx={{ p: 2 }} justifyContent="space-between" direction="row">
          <Stack direction="row" gap={1}>
            {search && (
              <TextField
                sx={{ width: '14rem' }}
                label="Search"
                size="small"
                value={search}
                onChange={handleSeachChange}
                onKeyDown={handleKeySubmit}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton size="small" onClick={submitSearch} edge="end">
                        <SendIcon color={search ? 'primary' : 'disabled'} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
            {submitted && (
              <Button color="error" onClick={clearSearch}>
                Clear
              </Button>
            )}
          </Stack>
          <Stack direction="row" gap={2}>
            {Boolean(filters?.length) && (
              <TableFilterComponent filters={filters} onFilterSubmit={onFilterSubmit} />
            )}
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};

export default TableToolbarComponent;
