import FilterListIcon from '@mui/icons-material/FilterList';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { Button, Fade, MenuItem, Paper, Popper, Stack, TextField } from '@mui/material';
import type { ChangeEvent, MouseEvent } from 'react';
import { useContext, useState } from 'react';
import { TableContext } from '../table.context';

const TableFilterComponent: React.FC = () => {
  const { filters, onFilterSubmit } = useContext(TableContext);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const onFilterClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const [filterData, setFilterData] = useState<{ [name: string]: string }>({});

  const onApplyClick = () => {
    onFilterSubmit?.(filterData);
    setAnchorEl(null);
  };
  const onResetClick = () => {
    onFilterSubmit?.({});
    setFilterData({});
    setAnchorEl(null);
  };
  const onCloseClick = () => {
    setAnchorEl(null);
  };

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFilterData((p) => ({ ...p, [name]: value }));
  };

  return (
    <>
      <Button
        variant="custom-bg-primary"
        startIcon={<FilterListIcon />}
        onClick={onFilterClick}
        size="small"
      >
        Filter
      </Button>
      <Popper
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        placement={'bottom-end'}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper sx={{ minWidth: '24rem' }}>
              <Stack sx={{ p: 2 }}>
                {filters?.map((filter) => {
                  return (
                    <TextField
                      name={filter.name}
                      label={filter.label}
                      select
                      value={filterData[filter.name]}
                      onChange={onInputChange}
                      size="small"
                    >
                      <MenuItem value={''}>
                        <em>None</em>
                      </MenuItem>
                      {filter.options.map((option) => (
                        <MenuItem value={option.value}>{option.label}</MenuItem>
                      ))}
                    </TextField>
                  );
                })}
              </Stack>
              <Stack direction="row" justifyContent="space-between" sx={{ p: 1 }}>
                <Button
                  color="error"
                  startIcon={<RestartAltIcon />}
                  onClick={onResetClick}
                >
                  Reset
                </Button>
                <Stack direction="row" gap={2}>
                  <Button onClick={onCloseClick}>Close</Button>
                  <Button variant="contained" onClick={onApplyClick}>
                    Apply
                  </Button>
                </Stack>
              </Stack>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  );
};

export default TableFilterComponent;
