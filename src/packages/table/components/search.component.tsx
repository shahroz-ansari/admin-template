import SendIcon from '@mui/icons-material/Send';
import { Button, IconButton, InputAdornment, Stack, TextField } from '@mui/material';
import type { ChangeEvent, KeyboardEvent } from 'react';
import { useContext, useState } from 'react';
import { TableContext } from '../table.context';
export const SearchComponent = () => {
  const { setKeyword } = useContext(TableContext);

  const [search, setSearch] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSeachChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  const submitSearch = () => {
    if (search) {
      setKeyword?.(search);
      setSubmitted(true);
    }
  };
  const clearSearch = () => {
    setKeyword?.('');
    setSearch('');
    setSubmitted(false);
  };
  const handleKeySubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      submitSearch();
    }
  };

  return (
    <Stack direction="row" gap={1}>
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
      {submitted && (
        <Button color="error" onClick={clearSearch}>
          Clear
        </Button>
      )}
    </Stack>
  );
};
