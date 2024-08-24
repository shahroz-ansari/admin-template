import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import type { ReactNode } from 'react';

interface Props {
  handleSidebarToggle: () => void;
  userMenu: ReactNode;
}

const HeaderComponent: React.FC<Props> = ({ userMenu, handleSidebarToggle }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Stack direction="row">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleSidebarToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Admin Template
          </Typography>
        </Stack>
        {userMenu}
      </Toolbar>
    </AppBar>
  );
};

export default HeaderComponent;
